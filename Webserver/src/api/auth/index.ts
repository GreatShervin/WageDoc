import { Request, Response, Router } from "express";
import User from "../../db/models/User";
import { userLoginSchema, userRegisterSchema, verifySchema } from "../../schemas/userSchemas";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Verification from "../../db/models/Verification";
import { sendVerification } from "../../utils/sendMail";
export const router = Router();


router.get("/login", async (req: Request, res: Response) => {
    let body = req.body;
    try {

        const value = await userLoginSchema.validateAsync(body);

        console.log(body);

        let foundUser: User | null = await User.findOne({
            where: { email: value.email },
        });

        if (!foundUser) {
            return res.status(400).json(null);
        }

        const match: boolean = await bcrypt.compare(
            value.password,
            foundUser.password
        );

        if (!match) {
            return res.status(400).json(null);
        }

        let token = jwt.sign({
            id: foundUser.id, email: foundUser.email
        },
            process.env.SECRET!,
            {expiresIn: "1h"}
        );

        console.log("token",token);

        if (!foundUser.verified) {
            return res.status(201).json(token);
        }

        return res.status(200).json(token);
    }
    catch (error) {
        console.log(error);

        return res.status(400).json(error);
    }

});

router.post("/register", async (req: Request, res: Response) => {
    let body = req.body;
    try {

        let value = await userRegisterSchema.validateAsync(body);
        value.verified = false;

        console.log(body);
        console.log(value);

        let foundUser: User | null = await User.findOne({
            where: { email: value.email },
        });

        if (foundUser) {
            console.log("foundUser");
            return res.status(400).json(null);
        }

        const hash = await bcrypt.hash(value.password, 10);
        value.password = hash;

        const createdUser = await User.create(value);

        console.log(createdUser);


        let code = { "code": Math.floor(Math.random() * 1000000) };
        await Verification.create(code);

        sendVerification(createdUser.email, code.code)


        return res.status(201).json(createdUser);
    }
    catch (error) {
        console.log(error);

        return res.status(400).json(error);
    }
});


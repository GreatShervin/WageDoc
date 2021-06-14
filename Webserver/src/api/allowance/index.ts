import { Request, Response, Router } from "express";
import Allowance from "../../db/models/Allowance";
import Shift from "../../db/models/Shift";
import Company from "../../db/models/Company";
import User from "../../db/models/User";
import { allowancePOSTSchema } from "../../schemas/allowanceSchemas";
export const router = Router();

router.get("/allowance", async (req: Request, res: Response) => {
    let id = req.user!.id;
    try {
        
        let foundAllowances = await Allowance.findAll({where: {user_id: id},
            include: [
                {
                    model: Shift,
                    required: true,
                    include: [
                        {
                            model: Company,
                            required: true,
                        }
                    ]
                },
        ]});

        return res.status(200).json(foundAllowances);
    } catch (error) {
        return res.status(400).json(error);
    }
});

router.post("/allowance", async(req: Request, res: Response) => {
    let id = req.user!.id;
    let body = req.body;
    try {
        
        let value = await allowancePOSTSchema.validateAsync(body);

        await Allowance.create(value);

        return res.status(200);
    } catch (error) {
        return res.status(400).json(error);
    }
});
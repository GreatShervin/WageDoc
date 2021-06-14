import { Request, Response, Router } from "express";
import Company from "../../db/models/Company";
import Shift from "../../db/models/Shift";
import User from "../../db/models/User";
import Verification from "../../db/models/Verification";
import { userLoginSchema, userPATCHSchema, userRegisterSchema, verifySchema } from "../../schemas/userSchemas";
export const router = Router();

router.patch("/verify", async (req: Request, res: Response) => {
  let body = req.body;
  let id = req.user!.id;
  try {
    let value = await verifySchema.validateAsync(body);

    let foundCode: Verification | null = await Verification.findOne({
      where: { code: value.code },
    });

    if (!foundCode) {
      return res.status(400).json();
    }

    let foundUser: User | null = await User.findOne({
      where: { id: id },
    });


    if (foundUser) {
      let value = {...foundUser};
      value.verified = true;

      await User.update(value, { where: { id } });

      return res.status(200).json(value);
    }


    return res.status(200).json(foundUser);
  }
  catch (error) {
    console.log(error);

    return res.status(400).json(error);
  }
});

router.get("/user", async (req: Request, res: Response) => {
  let id = req.user!.id;
  try {

    let foundUser = await User.findOne({ where: { id } })

    return res.status(200).json(foundUser);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.delete("/user", async (req: Request, res: Response) => {
  let id = req.user!.id;
  try {

    await User.destroy({ where: { id } });


    return res.status(200);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.patch("/user", async (req: Request, res: Response) => {
  let id = req.user!.id;
  let body = req.body;
  try {
    let value = await userPATCHSchema.validateAsync(body);
    await User.update(value, { where: { id } });

    return res.status(200);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.get("/alot", async (req: Request, res: Response) => {
  let id = req.user!.id;
  try {
    let value = "???";

    let foundUser = await User.findOne({ where: { id } });
    let foundCompanies: Array<Company> = await Company.findAll({
      where: { user_id: id }, include: [
        {
          model: Shift,
          required: true,
        }
      ]
    });

    let average = 0;
    let total = 0;
    let cash = 0;
    foundCompanies.forEach(c => {
      average += c.lohn;

      if (c.shifts)
        c.shifts.forEach(s => {
          let hours = s.till.getHours() - s.from.getHours();
          cash += hours * c.lohn;
        });
    });
    average /= foundCompanies.length;

    return res.status(200).json(value);
  } catch (error) {
    return res.status(400).json(error);
  }
});
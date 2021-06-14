import { Request, Response, Router } from "express";
import { values } from "sequelize/types/lib/operators";
import Company from "../../db/models/Company";
import { companyDELETESchema, companyPATCHSchema, companyPOSTSchema } from "../../schemas/companySchemas";
export const router = Router();

router.get("/company", async (req: Request, res: Response) => {
  let id = req.user!.id;
  try {
    if (!id)
      return res.status(200).json()


    let companies = await Company.findAll({ where: { user_id: id } });

    return res.status(200).json(companies);

  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/company", async (req: Request, res: Response) => {
  let id = req.user!.id;
  let body = req.body;
  try {
    let value = await companyPOSTSchema.validateAsync(body);
    value.user_id = id;

    const company = Company.create(value);

    return res.status(200).json(company);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.delete("/company", async (req: Request, res: Response) => {
  let id = req.user!.id;
  let body = req.body;
  try {

    let value = await companyDELETESchema.validateAsync(body);

    await Company.destroy({ where: { name: value.name, user_id: id } })

    return res.status(200);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.patch("/company", async (req: Request, res: Response) => {
  let id = req.user!.id;
  let body = req.body;
  try {
    let value = await companyPATCHSchema.validateAsync(body);

    let foundCompany = await Company.findOne({ where: { name: value.name, user_id: id } })

    if (!foundCompany)
      return res.status(400).json(null);

    foundCompany.lohn = value.lohn;

    await Company.update(foundCompany, { where: { name: value, user_id: id } })

    return res.status(200);
  } catch (error) {
    return res.status(400).json(error);
  }
});
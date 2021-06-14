import { Request, Response, Router } from "express";
import { date } from "joi";
import Company from "../../db/models/Company";
import Shift from "../../db/models/Shift";
import { ShiftDELETESchema, ShiftPATCHSchema } from "../../schemas/shiftSchemas";
export const router = Router();


router.get("/shift", async (req: Request, res: Response) => {
    let id = req.user?.id;
    try {

        let foundShifts = await Shift.findAll({
            include: [
                {
                    model: Company,
                    as: "company",
                    required: true,
                    where: { user_id: id },
                },
            ],
        });

        return res.status(200).json(foundShifts);
    } catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
});

router.delete("/shift", async (req: Request, res: Response) => {
    let id = req.user!.id;
    let body = req.body;
    try {
        let value = await ShiftDELETESchema.validateAsync(body);

        let foundCompany = await Company.findOne({ where: { name: value.company_name, user_id: id } })
        await Shift.destroy({ where: { date: value.date, company_id: foundCompany?.id } });

        return res.status(200);
    } catch (error) {
        return res.status(400).json(error);
    }
});

router.patch("/shift", async (req: Request, res: Response) => {
    let id = req.user!.id;
    let body = req.body;
    try {

        let value = await ShiftPATCHSchema.validateAsync(body);

        let foundCompany = await Company.findOne({ where: { name: value.company_name, user_id: id } });
        let foundShift = await Shift.findOne({ where: { company_id: foundCompany?.id, date: value.date } });

        if (foundShift) {
            foundShift.till = value.till;
            foundShift.from = value.from;

            await Shift.update(foundShift, { where: { company_id: foundCompany?.id, date: value.date } });
        }

        return res.status(200).json(foundShift);
    } catch (error) {
        return res.status(400).json(error);
    }
});
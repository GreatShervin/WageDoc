import Joi from "joi";

export const ShiftPOSTSchema = Joi.object({
    company_name: Joi.string().required(),
    date: Joi.date().required(),
    from: Joi.date().required(),
    till: Joi.date().required(),
});

export const ShiftPATCHSchema = Joi.object({
    company_name: Joi.string().required(),
    date: Joi.date().required(),
    from: Joi.date(),
    till: Joi.date(),
});

export const ShiftDELETESchema = Joi.object({
    company_name: Joi.string().required(),
    date: Joi.date().required(),
});
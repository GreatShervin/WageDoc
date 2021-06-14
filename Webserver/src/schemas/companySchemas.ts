import Joi from "joi";

export const companyPOSTSchema = Joi.object({
    name: Joi.string().required(),
    beitrittsdatum: Joi.date().required(),
    lohn: Joi.number().required()
});

export const companyPATCHSchema = Joi.object({
    lohn: Joi.number().required()
});

export const companyDELETESchema = Joi.object({
    name: Joi.string().required(),
});
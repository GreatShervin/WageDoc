import Joi from "joi";

export const userLoginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});

export const userRegisterSchema = Joi.object({
    first_name: Joi.string().required(),
    second_name: Joi.string().required(),
    birthday: Joi.date().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export const verifySchema = Joi.object({
    code: Joi.number().required(),
});

export const userPATCHSchema = Joi.object({
    first_name: Joi.string().required(),
    second_name: Joi.string().required(),
    birthday: Joi.date().required(),
});
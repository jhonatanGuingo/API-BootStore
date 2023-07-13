import Joi from "joi";

export const schemaSignUp = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(3)
})

export const schemaSigIn = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(3)
})
import joi from "joi";

export const schemaDiscount = joi.object({
    code: joi.string().required()
});
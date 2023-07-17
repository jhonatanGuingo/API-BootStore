import Joi from 'joi';

export const schemaCheckout = Joi.object({
    firstname: Joi.string().required(),
    surname: Joi.string().required(),
    company: Joi.string().required(),
    country: Joi.string().required(),
    city: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    zipcode: Joi.string().required(),
    payment: Joi.string().required(),
});
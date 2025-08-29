import Joi from 'joi';

export const roleDto = Joi.object({
  name: Joi.string().required(),
  permissions: Joi.array().items(Joi.string()).required()
});

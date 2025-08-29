import Joi from 'joi';

export const locationDto = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  capacity: Joi.number().optional()
});

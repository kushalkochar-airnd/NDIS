import Joi from 'joi';

export const userDto = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  role: Joi.string().required(),
  contact: Joi.object({
    phone: Joi.string().optional(),
    address: Joi.string().optional()
  }).optional(),
  active: Joi.boolean().optional(),
  skills: Joi.array().items(Joi.string()).optional(),
  availability: Joi.array().items(
    Joi.object({
      day: Joi.string().required(),
      startTime: Joi.string().required(),
      endTime: Joi.string().required()
    })
  ).optional()
});

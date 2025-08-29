import Joi from 'joi';

export const rosterDto = Joi.object({
  weekStart: Joi.string().required(),
  weekEnd: Joi.string().required(),
  shifts: Joi.array().items(Joi.string()).optional(),
  createdBy: Joi.string().optional(),
  published: Joi.boolean().optional()
});

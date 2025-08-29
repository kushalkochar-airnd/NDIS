import Joi from 'joi';

export const auditLogDto = Joi.object({
  action: Joi.string().required(),
  userId: Joi.string().required(),
  timestamp: Joi.string().required(),
  details: Joi.object().optional()
});

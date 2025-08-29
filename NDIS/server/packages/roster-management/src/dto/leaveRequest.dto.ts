import Joi from 'joi';

export const leaveRequestDto = Joi.object({
  userId: Joi.string().required(),
  startDate: Joi.string().required(),
  endDate: Joi.string().required(),
  type: Joi.string().required(),
  status: Joi.string().optional(),
  reason: Joi.string().optional()
});

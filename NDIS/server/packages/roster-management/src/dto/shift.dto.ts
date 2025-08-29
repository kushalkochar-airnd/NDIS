import Joi from 'joi';

export const shiftDto = Joi.object({
  date: Joi.string().required(),
  startTime: Joi.string().required(),
  endTime: Joi.string().required(),
  location: Joi.string().required(),
  assignedTo: Joi.string().optional(),
  status: Joi.string().optional(),
  shiftType: Joi.string().optional(),
  requiredSkills: Joi.array().items(Joi.string()).optional(),
  notes: Joi.string().optional()
});

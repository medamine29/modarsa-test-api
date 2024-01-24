import Joi from 'joi';
import { RequestValidationSchemas } from '.';

/**
 * POST /appointments
 */
export const addAppointmentSchema: RequestValidationSchemas = {
  body: Joi.object().keys({
    startTime: Joi.date().required(),
    endTime: Joi.date().greater(Joi.ref('startTime')).required(),
    clientId: Joi.number().integer().required(),
    staffMemberId: Joi.number().integer().required(),
  }),
};

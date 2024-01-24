import Joi from 'joi'
import { RequestValidationSchemas } from '.'

/**
 * POST /clients
 */
export const addStaffMemberSchema: RequestValidationSchemas = {
  body: Joi.object().keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
  }),
}

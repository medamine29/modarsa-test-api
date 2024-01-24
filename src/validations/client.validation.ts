import Joi from 'joi'
import { RequestValidationSchemas } from '.'

/**
 * POST /clients
 */
export const addClientSchema: RequestValidationSchemas = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
}

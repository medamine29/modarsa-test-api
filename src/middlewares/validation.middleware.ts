import { NextFunction, Request, Response } from 'express'
import { AsyncValidationOptions } from 'joi'
import { RequestValidationSchemas } from '../validations'

const validate = (
  schemas: RequestValidationSchemas,
  options: AsyncValidationOptions = { allowUnknown: true, abortEarly: true }
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (schemas.body) await schemas.body.validateAsync(req.body, options)
      if (schemas.params) await schemas.params.validateAsync(req.params, options)
      if (schemas.query) await schemas.query.validateAsync(req.query, options)
      next()
    } catch (error) {
      return next(error)
    }
  }
}

export default validate

import { NextFunction, Request, Response } from 'express'

export default function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res.status(500).json({ message: err.message })
  } catch (error) {
  }

  next()
}

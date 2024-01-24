import { Router } from 'express'
import { catchMiddleware } from '../middlewares/catch.middleware'
import validate from '../middlewares/validation.middleware'
import {
  addClientSchema,
} from '../validations/client.validation'
import {
  getAllClients,
  addClient
} from "../controllers/client.controller"

const router = Router()

router.get(
  '/all',
  catchMiddleware(getAllClients)
)

router.post(
  '/',
  validate(addClientSchema),
  catchMiddleware(addClient)
)

export { router as clientRouter }

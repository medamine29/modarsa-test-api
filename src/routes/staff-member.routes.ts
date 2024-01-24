import { Router } from 'express'
import { catchMiddleware } from '../middlewares/catch.middleware'
import validate from '../middlewares/validation.middleware'
import {
  addStaffMemberSchema,
} from '../validations/staff-member.validation'
import {
  getAllStaffMembers,
  addStaffMember
} from "../controllers/staff-member.controller"

const router = Router()

router.get(
  '/all',
  catchMiddleware(getAllStaffMembers)
)

router.post(
  '/',
  validate(addStaffMemberSchema),
  catchMiddleware(addStaffMember)
)

export { router as staffMemberRouter }

import { Router } from 'express';
import { catchMiddleware } from '../middlewares/catch.middleware';
import validate from '../middlewares/validation.middleware';
import { addAppointmentSchema } from '../validations/appointment.validation'; // You need to create this validation file
import {
  getAllAppointments,
  addAppointment
} from '../controllers/appointment.controller';

const router = Router();

router.get('/all', catchMiddleware(getAllAppointments));

router.post('/', validate(addAppointmentSchema), catchMiddleware(addAppointment));

export { router as appointmentRouter };

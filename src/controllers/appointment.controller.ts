import { Request, Response } from 'express';
import AppointmentService from '../services/appointment.service';
import ClientService from "../services/client.service";
import StaffMemberService from '../services/staff-member.service';

export const addAppointment = async (req: Request, res: Response) => {
  const { startTime, endTime, clientId, staffMemberId } = req.body;

  const client = await ClientService.findClientById(clientId)
  if (!client) throw new Error('Client not found')

  const staffMember = await StaffMemberService.findStaffMemberById(staffMemberId)
  if (!staffMember) throw new Error('Staff Member not found')

  const createdAppointment = await AppointmentService.createAppointment({
    startTime,
    endTime,
    clientId,
    staffMemberId,
  });

  res.json(createdAppointment);
};

export const getAllAppointments = async (req: Request, res: Response) => {
  const appointments = await AppointmentService.getAllAppointmentsWithRelations();
  res.json(appointments);
};

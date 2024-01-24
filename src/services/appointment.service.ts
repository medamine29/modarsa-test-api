import AppointmentRepository from '../repositories/appointment.repository';
import { IWriteAppointment } from '../models/appointment.model';

class AppointmentService {
  private appointmentRepository = AppointmentRepository;

  async getAllAppointmentsWithRelations() {
    const appointments = await this.appointmentRepository.findAllWithRelations();
    return appointments;
  }

  async createAppointment(appointment: IWriteAppointment) {
    const createdAppointment = await this.appointmentRepository.create(appointment);
    return createdAppointment;
  }

}

export default new AppointmentService();

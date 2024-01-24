import { Model } from 'sequelize';
import Appointment from '../models/appointment.model';
import Repository from './base.repository';

class AppointmentRepository extends Repository<Appointment> {
  constructor() {
    super(Appointment);
  }

  async findAllWithRelations(): Promise<Model<Appointment, any>[]> {
    return this.model.findAll({
      include: [
        { model: this.model.sequelize?.models.Client, as: 'client' },
        { model: this.model.sequelize?.models.StaffMember, as: 'staffMember' },
      ],
    });
  }
}

export default new AppointmentRepository();

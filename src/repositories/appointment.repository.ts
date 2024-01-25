import { Model } from 'sequelize';
import Appointment from '../models/appointment.model';
import Repository from './base.repository';
import { CLIENT, STAFF_MEMBER } from '../constants/database.constant';

class AppointmentRepository extends Repository<Appointment> {
  constructor() {
    super(Appointment);
  }

  async findAllWithRelations(): Promise<Model<Appointment, any>[]> {
    return this.model.findAll({
      include: [
        { model: this.model.sequelize?.models[CLIENT.model], as: 'client' },
        { model: this.model.sequelize?.models[STAFF_MEMBER.model], as: 'staffMember' },
      ],
    });
  }
}

export default new AppointmentRepository();

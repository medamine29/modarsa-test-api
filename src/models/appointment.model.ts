import { Model, DataTypes } from 'sequelize';
import sequelize from '../configs/database';
import Client from './client.model';
import StaffMember from './staff-member.model';

export interface IWriteAppointment {
  startTime: Date;
  endTime: Date;
  clientId: number;
  staffMemberId: number;
}

class Appointment extends Model {
  public id!: number;
  public startTime!: Date;
  public endTime!: Date;
  public clientId!: number;
  public staffMemberId!: number;
}

Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Client',
        key: 'id',
      },
    },
    staffMemberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'StaffMember',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Appointment',
    tableName: 'appointments',
    timestamps: false,
  }
);

Appointment.belongsTo(Client, {
  foreignKey: 'clientId',
  as: 'client',
});

Appointment.belongsTo(StaffMember, {
  foreignKey: 'staffMemberId',
  as: 'staffMember',
});

export default Appointment;

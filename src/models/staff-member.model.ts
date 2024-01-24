import { Model, DataTypes } from 'sequelize';
import sequelize from '../configs/database';

export interface IWriteStaffMember {
  firstname: string;
  lastname: string
}

class StaffMember extends Model {
  public id!: number;
  public firstname!: string;
  public lastname!: string;
}

StaffMember.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'StaffMember',
    tableName: 'staff_members',
    timestamps: false
  }
);

export default StaffMember;

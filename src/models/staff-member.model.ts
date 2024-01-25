import { Model, DataTypes } from 'sequelize';
import sequelize from '../configs/database';
import { STAFF_MEMBER } from '../constants/database.constant';

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
    modelName: STAFF_MEMBER.model,
    tableName: STAFF_MEMBER.table,
    timestamps: false
  }
);

export default StaffMember;

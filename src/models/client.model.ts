import { Model, DataTypes } from 'sequelize';
import sequelize from '../configs/database';
import { CLIENT } from "../constants/database.constant"

export interface IWriteClient {
  name: string;
}

class Client extends Model {
  public id!: number;
  public name!: string;
}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: CLIENT.model,
    tableName: CLIENT.table,
    timestamps: false
  }
);

export default Client;

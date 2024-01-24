import { Model, DataTypes } from 'sequelize';
import sequelize from '../configs/database';

export interface IWriteClient {
  name?: string;
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
    modelName: 'Client',
    tableName: 'clients',
    timestamps: false
  }
);

export default Client;

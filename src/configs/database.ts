import { Sequelize } from 'sequelize-typescript';
require('dotenv').config();

class Database {

  private static instance: Sequelize | null = null;

  private constructor() {}

  static getInstance(): Sequelize {
    if (!Database.instance) {
      Database.instance = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST as string,
        username: process.env.DB_USER as string,
        password: process.env.DB_PASSWORD as string,
        database: process.env.DB_NAME as string,
        models: [__dirname + '../models'],
      });
    }

    return Database.instance;
  }
}

const sequelize: Sequelize = Database.getInstance();

export default sequelize;

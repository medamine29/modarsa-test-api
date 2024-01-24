import { Model } from 'sequelize';
import Client from '../models/client.model';
import Repository from './base.repository';

class ClientRepository extends Repository<Client> {
  constructor() {
    super(Client);
  }

  async findByName(name: string): Promise<Model<Client, any> | null> {
    return this.model.findOne({
      where: {
        name,
      },
    });
  }
}

export default new ClientRepository();

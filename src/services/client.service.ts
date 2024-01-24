import ClientRepository from '../repositories/client.repository';
import { IWriteClient } from '../models/client.model';

class ClientService {
  private clientRepository = ClientRepository;

  async findClientByName(name: string) {
    const client = await this.clientRepository.findByName(name);
    return client
  }

  async findClientById(id: number) {
    const client = await this.clientRepository.findById(id);
    return client
  }

  async createClient(client: IWriteClient) {
    const createdClient = await this.clientRepository.create(client)
    return createdClient
  }

  async getAllClients() {
    const clients = this.clientRepository.findAll()
    return clients
  }

}

export default new ClientService();

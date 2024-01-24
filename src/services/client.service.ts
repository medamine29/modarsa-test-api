import ClientRepository from '../repositories/client.repository';

class ClientService {
  private clientRepository = ClientRepository;

  async findClient(name: string) {
    const client = await this.clientRepository.findByName(name);
    return client
  }

}

export default new ClientService();

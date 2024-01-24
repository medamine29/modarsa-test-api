import { Request, Response } from 'express'
import ClientService from '../services/client.service'

export const addClient = async (req: Request, res: Response) => {
  const { name } = req.body

  const existingClient = await ClientService.findClientByName(name)
  if (existingClient) throw new Error('Client already exists')

  const createdClient = await ClientService.createClient({ name })

  res.json(createdClient)
}

export const getAllClients = async (req: Request, res: Response) => {
  const clients = await ClientService.getAllClients()
  res.json(clients)
}

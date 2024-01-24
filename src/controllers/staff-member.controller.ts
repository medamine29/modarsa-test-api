import { Request, Response } from 'express'
import StaffMemberService from '../services/staff-member.service'

export const addStaffMember = async (req: Request, res: Response) => {
  const { firstname, lastname } = req.body

  const createdStaffMember = await StaffMemberService.createStaffMember({ firstname, lastname })

  res.json(createdStaffMember)
}

export const getAllStaffMembers = async (req: Request, res: Response) => {
  const staffMembers = await StaffMemberService.getAllStaffMembers()
  res.json(staffMembers)
}

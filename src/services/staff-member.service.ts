import StaffMemberRepository from '../repositories/staff-member.repository';
import StaffMember, { IWriteStaffMember } from '../models/staff-member.model';

class ClientService {
  private staffMemberRepository = StaffMemberRepository;

  async createStaffMember(staffMember: IWriteStaffMember) {
    const createdStaffMember = await this.staffMemberRepository.create(staffMember)
    return createdStaffMember
  }

  async getAllStaffMembers() {
    const staffMembers = this.staffMemberRepository.findAll()
    return staffMembers
  }

}

export default new ClientService();

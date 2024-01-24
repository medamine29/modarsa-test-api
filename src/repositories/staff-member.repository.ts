import StaffMember from '../models/staff-member.model';
import Repository from './base.repository';

class StaffMemberRepository extends Repository<StaffMember> {
  constructor() {
    super(StaffMember);
  }

}

export default new StaffMemberRepository();

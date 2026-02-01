import Member from "../models/member.model";

export default class MemberService {
  createMember(data: any) {
    return Member.create(data);
  }

  getMembers() {
    return Member.find();
  }

  async getMemberById(id: string) {
    const member = await Member.findById(id);
    if (!member) throw new Error("Member not found");
    return member;
  }

  async deleteMember(id: string) {
    const member = await Member.findByIdAndDelete(id);
    if (!member) throw new Error("Member not found");
    return member;
  }
}

import { Request, Response } from "express";
import MemberService from "../services/member.service";

export default class MemberController {
  private memberService = new MemberService();

  createMember = async (req: Request, res: Response) => {
    try {
      const member = await this.memberService.createMember(req.body);
      res.status(201).json(member);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };

  getMembers = async (_req: Request, res: Response) => {
    const members = await this.memberService.getMembers();
    res.json(members);
  };

  getMember = async (req: Request, res: Response) => {
    try {
      const member = await this.memberService.getMemberById(req.params.id as string);
      res.json(member);
    } catch (err: any) {
      res.status(404).json({ error: err.message });
    }
  };

  deleteMember = async (req: Request, res: Response) => {
    try {
      await this.memberService.deleteMember(req.params.id as string);
      res.json({ message: "Member deleted" });
    } catch (err: any) {
      res.status(404).json({ error: err.message });
    }
  };
}

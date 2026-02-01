import { Router } from "express";
import MemberController from "../controllers/member.controller";

const router = Router();
const controller = new MemberController();

router.post("/", controller.createMember);
router.get("/", controller.getMembers);
router.get("/:id", controller.getMember);
router.delete("/:id", controller.deleteMember);

export default router;

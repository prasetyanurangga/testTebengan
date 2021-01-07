import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.get("/user", UserController.getData);

export default router;
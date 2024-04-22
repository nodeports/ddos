import { Router } from "express";
import { register, login } from "../controllers/auth";
import { validateUser } from "../middlewares/request-validator";

const router = Router();

router.post("/register", validateUser, register);
router.post("/login", validateUser, login);

export default router;

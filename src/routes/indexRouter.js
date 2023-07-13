import { Router } from "express";
import authRouter from "./userRouter.js"

const router = Router();
router.use(authRouter);

export default router;
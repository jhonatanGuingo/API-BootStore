import { Router } from "express";
import authRouter from "./userRouter.js"
import productsRouter from "./productsRouter.js";

const router = Router();
router.use(authRouter);
router.use(productsRouter);

export default router;
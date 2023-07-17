import { Router } from "express";
import authRouter from "./userRouter.js"
import productsRouter from "./productsRouter.js";
import checkoutRouter from "./checkoutRouter.js";

const router = Router();
router.use(authRouter);
router.use(productsRouter);
router.use(checkoutRouter);

export default router;
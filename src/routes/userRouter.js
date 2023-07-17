import { Router } from "express";
import { signIn, signUp } from "../controllers/userController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { schemaSigIn, schemaSignUp } from "../schemas/validate.schema.js";


const authRouter = Router();
authRouter.post("/signUp",validateSchema(schemaSignUp), signUp)
authRouter.post("/signIn", validateSchema(schemaSigIn), signIn)
export default authRouter;
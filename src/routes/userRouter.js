import { Router } from "express";
import { signIn, signUp } from "../controllers/userController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { schemaSigIn, schemaSignUp } from "../schemas/validate.schema.js";


const router = Router();
router.post("/signUp",validateSchema(schemaSignUp), signUp)
router.post("/signIn", validateSchema(schemaSigIn), signIn)
export default router;
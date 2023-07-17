import { Router } from 'express';
import { postCheckout } from '../controllers/checkoutController.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { schemaCheckout } from '../schemas/checkout.schema.js';

const checkoutRouter = Router();
checkoutRouter.post('/checkout', validateSchema(schemaCheckout), postCheckout);
export default checkoutRouter;

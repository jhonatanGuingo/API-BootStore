import { Router } from 'express';
import { postCheckout } from '../controllers/checkoutController.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { schemaCheckout } from '../schemas/checkout.schema.js';

const router = Router();
router.post('/checkout', validateSchema(schemaCheckout), postCheckout);
export default router;

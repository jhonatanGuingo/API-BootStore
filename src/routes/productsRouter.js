import { Router } from "express";
import { getCellphones, getComputers, getGames, getHardware, getPeripherals, postCellphones, postComputers, postGames, postHardware, postPeripherals, sendDiscount } from "../controllers/productsController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { schemaDiscount } from "../schemas/product.schemas.js";
import { existDiscount } from "../middlewares/products.js";

const productsRouter = Router();

productsRouter.post("/peripherals", postPeripherals);
productsRouter.get("/peripherals", getPeripherals);

productsRouter.post("/games", postGames);
productsRouter.get("/games", getGames);

productsRouter.post("/hardware", postHardware);
productsRouter.get("/hardware", getHardware);

productsRouter.post("/computers", postComputers);
productsRouter.get("/computers", getComputers);

productsRouter.post("/cellphones", postCellphones);
productsRouter.get("/cellphones", getCellphones);

productsRouter.post("/descount", validateSchema(schemaDiscount), existDiscount, sendDiscount)

export default productsRouter;
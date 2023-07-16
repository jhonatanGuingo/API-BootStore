import { Router } from "express";
import { getCellphones, getComputers, getGames, getHardware, getPeripherals, postCellphones, postComputers, postGames, postHardware, postPeripherals } from "../controllers/productsController.js";

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

export default productsRouter;
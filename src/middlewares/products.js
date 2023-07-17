import { db } from "../app.js";

export async function existDiscount(req, res, next) {
    try {
      const searchCode = await db.collection("discounts").findOne({ code: code });
      const { code } = req.body;
  
      if ( searchCode === null ) {
        return res.status(404).send("Codigo inválido");
      };
  
      res.locals.value = searchCode;
  
      next();
  
    } catch (err) {
      return res.status(500).send(err.message);
    }
}
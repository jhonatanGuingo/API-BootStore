import { db } from "../app.js";

//perifericos
export async function postPeripherals(req, res) {
    try {
        await db.collection("peripherals").insertOne(req.body);
        res.send(req.body);
    } catch (err) {
      return res.status(500).send(err.message);
    }
}

export async function deletePeripherals(req, res) {
  try {
      await db.collection("peripherals").deleteMany();
      res.send("deleted");
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

export async function getPeripherals(req, res) {
    try {
        const products = await db.collection("peripherals").find().toArray();
        res.send(products);
    } catch (err) {
      return res.status(500).send(err.message);
    }
}

//games
export async function postGames(req, res) {
    try {
        await db.collection("games").insertOne(req.body);
        res.send(req.body);
    } catch (err) {
      return res.status(500).send(err.message);
    }
}

export async function getGames(req, res) {
    try {
        const products = await db.collection("games").find().toArray();
        res.send(products);
    } catch (err) {
      return res.status(500).send(err.message);
    }
}

//hardware
export async function postHardware(req, res) {
    try {
        await db.collection("hardware").insertOne(req.body);
        res.send(req.body);
    } catch (err) {
      return res.status(500).send(err.message);
    }
}

export async function getHardware(req, res) {
    try {
        const products = await db.collection("hardware").find().toArray();
        res.send(products);
    } catch (err) {
      return res.status(500).send(err.message);
    }
}

//computers
export async function postComputers(req, res) {
    try {
        await db.collection("computers").insertOne(req.body);
        res.send(req.body);
    } catch (err) {
      return res.status(500).send(err.message);
    }
}

export async function getComputers(req, res) {
    try {
        const products = await db.collection("computers").find().toArray();
        res.send(products);
    } catch (err) {
      return res.status(500).send(err.message);
    }
}

//cellphones
export async function postCellphones(req, res) {
    try {
        await db.collection("cellphones").insertOne(req.body);
        res.send(req.body);
    } catch (err) {
      return res.status(500).send(err.message);
    }
}

export async function getCellphones(req, res) {
    try {
        const products = await db.collection("cellphones").find().toArray();
        res.send(products);
    } catch (err) {
      return res.status(500).send(err.message);
    }
}

export function sendDiscount(req, res) {
  res.status(200).send(res.locals.value)
}
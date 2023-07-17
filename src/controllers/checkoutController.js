import { db } from '../app.js';

export async function postCheckout(req, res) {
    try {
        await db.collection('checkout').insertOne(req.body);
        res.send(req.body);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
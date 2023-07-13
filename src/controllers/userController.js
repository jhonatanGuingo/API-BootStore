import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { db } from "../app.js";

export async function signUp(req, res) {
  const { name, email, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  try {
    const emailExist = await db.collection("signUp").findOne({ email: email });
    if (emailExist) return res.status(409).send("E-mail já cadastrado");

    await db.collection("signUp").insertOne({
      name,
      email,
      password: hash,
    });

    res.sendStatus(201);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

export async function signIn(req, res) {
  const { email, password } = req.body;

  try {
    const searchEmail = await db.collection("signUp").findOne({ email: email });
    if (!searchEmail) return res.status(404).send("E-mail não cadastrado");

    if (searchEmail && bcrypt.compareSync(password, searchEmail.password)){
        const token = uuid();
        const user = {
            userId: searchEmail._id,
            name: searchEmail.name,
            token: token
        };

        await db.collection("sessions").insertOne(user);
        res.status(200).send(user)
    } else {
        res.sendStatus(401)
    }
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

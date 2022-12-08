import mongoose from "mongoose";
import UserModel from "../../database/Models/User";

import Joi from "joi";

const schemaRegister = Joi.object({
  nombre: Joi.string().min(6).max(255).required(),
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required(),
});

export default async function login(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      //validar datos
      const { error } = schemaRegister.validate(req.body);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

      const { nombre, email } = req.body;

      //validar email
      const isEmailExist = await UserModel.findOne({ email });

      if (isEmailExist) {
        return res.status(400).json({ error: "Email ya registrado" });
      }

      //encriptar contraseña
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.body.password, salt);

      //guardar usuario
      UserModel.create({
        _id: new mongoose.Types.ObjectId(),
        Nombre: nombre,
        email: email,
        Password: password,
      });

      res.status(200).json({ name: "John Doe" });
      return;

    default:
      res.status(404).json({ message: "Not Found" });
      return;
  }
}

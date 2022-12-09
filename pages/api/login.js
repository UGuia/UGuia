import mongoose from "mongoose";
import Connection from "../../database/connect";
import UserModel from "../../database/Models/User";
import Joi from "joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { setCookie } from "cookies-next";
import { serialize } from "cookie";

const schemaLogin = Joi.object({
  email: Joi.string().min(6).max(255).required().email().messages({
    "string.base": `Username should be a type of 'text'.`,
    "string.empty": `Username cannot be an empty field.`,
    "string.min": `El email debe contener al menos 6 letras.`,
    "any.required": `El email es requerido.`,
    "string.email": "El email no tiene formato valido.",
  }),
  password: Joi.string().min(6).max(1024).required().messages({
    "string.base": `Username should be a type of 'text'.`,
    "string.empty": `Username cannot be an empty field.`,
    "string.min": `La password debe contener al menos 6 letras.`,
    "any.required": `La password es requerida.`,
  }),
});

export default async function login(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      await Connection();

      // const salt = await bcrypt.genSalt(10);
      // const password = await bcrypt.hash("12345678", salt);

      // UserModel.updateOne(
      //   { email: "efrain@gmail.com" },
      //   { Password: password },
      //   function (err, docs) {
      //     if (err) {
      //       console.log(err);
      //     } else {
      //       console.log("Updated Docs : ", docs);
      //     }
      //   }
      // );

      // return res.json({ message: "creo" });

      const { error } = schemaLogin.validate(req.body);
      if (error)
        return res.status(400).json({ error: error.details[0].message });

      const user = await UserModel.findOne({ email: req.body.email });

      if (!user)
        return res.status(400).json({ error: "Usuario no encontrado" });

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.Password
      );

      if (!validPassword)
        return res.status(400).json({ error: "contraseña no válida" });

      //crear token
      const token = jwt.sign(
        {
          email: user.email,
          id: user._id,
        },
        process.env.TOKEN_SECRET
      );

      //res.status(200).json({ data: "exito" });
      /* res.setHeader("auth-token", token).json({
        error: null,
        data: { token },
      }); */

      //res.cookie("token", token, { httpOnly: true });

      res.setHeader("Set-Cookie", serialize("token", token, { path: "/" }));

      res.status(200).json({
        error: null,
        data: { token },
      });
      return;

    default:
      res.status(404).json({ message: "Not Found" });
      return;
  }
}

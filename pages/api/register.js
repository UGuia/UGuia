import mongoose from "mongoose";
import UserModel from "../../database/Models/User";
import bcrypt from "bcrypt";
import Joi from "joi";

const schemaRegister = Joi.object({
  nombre: Joi.string().min(4).max(255).required().messages({
    "string.min": `El nombre debe contener al menos 4 letras.`,
    "any.required": `El nombre es requerido.`,
    "string.max": "El nombre es demasiado largo.",
  }),
  apellidos: Joi.string().min(6).max(255).required().messages({
    "string.min": `Los apellidos debe contener al menos 6 letras.`,
    "string.max": "Los apellidos es demasiado largo.",
    "any.required": `Los apellidos son requeridos.`,
  }),
  email: Joi.string().min(6).max(255).required().email().messages({
    "string.min": `El email debe contener al menos 6 letras.`,
    "string.max": "El email es demasiado largo.",
    "any.required": `El email es requerido.`,
    "string.email": "El email no tiene formato valido.",
  }),
  password: Joi.string().min(6).max(1024).required().messages({
    "string.min": `El password debe contener al menos 6 letras.`,
    "string.max": "El password es demasiado largo.",
    "any.required": `El password es requerido.`,
  }),
  telefono: Joi.number()
    .allow("")
    .optional()
    .min(6)
    .max(1024)
    .required()
    .messages({
      "number.min": `El telefono debe contener al menos 6 numeros.`,
      "number.max": "El telefono es demasiado largo.",
      "any.required": `El telefono es requerido.`,
    }),
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

      const { nombre, apellidos, email } = req.body;

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
        Nombre: nombre + "|" + apellidos,
        email: email,
        Password: password,
      });

      res.status(200).json({
        error: null,
        data: { message: "Se creo el usuario correctamente" },
      });
      return;

    default:
      res.status(404).json({ message: "Not Found" });
      return;
  }
}

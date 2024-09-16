import express from "express";
import routerLogin from "./login/login.js";
import routersBuy from "./orderBuy/index.js";
import statusCode from "../../utils/statusCode.js";

const routerApi = express.Router();

// Ruta principal para verificar que el servidor funciona
routerApi.get("/", (req, res) => {
  res.status(statusCode.ok).send("hello");
});

// Agregar rutas de la API
routerApi.use("/login", routerLogin);
routerApi.use("/orderBuy", routersBuy);

export default routerApi;

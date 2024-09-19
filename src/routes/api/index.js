import express from "express";
import routerLogin from "./login/login.js";
import routersBuy from "./orderBuy/index.js";
import statusCode from "../../utils/statusCode.js";
import routercard from "./cardbuy/index.js";

const routerApi = express.Router();

// Ruta principal para verificar que el servidor funciona
routerApi.get("/", (req, res) => {
  res.status(statusCode.ok).send("hello");
});

// Agregar rutas de la API
routerApi.use("/login", routerLogin);
routerApi.use("/orderBuy", routersBuy);
routerApi.use("/cardbuy", routercard);


export default routerApi;

import express from "express";
import routerLogin from "./login/login.js";
import statusCode from "../../utils/statusCode.js";
import routercard from "./cardbuy/index.js";
// * Routes 
import routerUser from "./user/index.js";
import routerNewUser from "./NewUsers/index.js";

const routerApi = express.Router();

// Ruta principal para verificar que el servidor funciona
routerApi.get("/", (req, res) => {
  res.status(statusCode.ok).send("hello");
});

// Agregar rutas de la API
routerApi.use("/login", routerLogin);

routerApi.use("/cardbuy", routercard);



routerApi.use("/user", routerUser);

routerApi.use("/newUser", routerNewUser);
export default routerApi

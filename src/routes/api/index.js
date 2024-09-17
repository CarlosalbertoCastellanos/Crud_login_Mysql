
import express from "express";
import statusCode from "../../utils/statusCode.js";
// * Routes 
import routerUser from "./user/index.js";

const routerApi = express.Router();
routerApi.get("/", (_, res) => {
    res.status(statusCode.ok).send("herllo");
});

routerApi.use("/user", routerUser);
export default routerApi
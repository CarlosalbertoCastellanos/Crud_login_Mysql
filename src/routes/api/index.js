
import express from "express";
import routersBuy from "./orderBuy/index.js";
import statusCode from "../../utils/statusCode.js";

const routerApi = express.Router();
routerApi.get("/", (req, res) => {
    res.status(statusCode.ok).send("herllo");
});
routerApi.use("/orderBuy", routersBuy)
export default routerApi
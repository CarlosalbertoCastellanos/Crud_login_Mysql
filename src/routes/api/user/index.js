import express from "express";
import routerSmartphone from "./smartPhone/index.js";
import routerOrderBuy from "./OrderBuy/index.js";

const routerUser = express.Router();
routerUser.use("/:userId/orderBuy", routerOrderBuy);
routerUser.use("/:userId/smartphone", routerSmartphone);
export default routerUser;

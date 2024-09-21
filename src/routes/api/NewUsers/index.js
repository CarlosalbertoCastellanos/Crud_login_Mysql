import express from "express";
import { InsertNewUsers } from "./NewUsers.services.js";
import ExistNewUserMiddleware from "./NewUsersMiddleware.js";
import helpers from "../../../lib/helpers.js";


const routerNewUser = express.Router();

routerNewUser.post("/", ExistNewUserMiddleware, async (req, res) => {

    
    let { username, fullname, password } = req.body;
    
    password = await helpers.encryptPassword(password);

    try {
        await InsertNewUsers(username, fullname, password)
        res.status(200).send({ message: "User create successful" })
    } catch (error) {
        res.status(401).send({ message: "Error User create" })
    }

})


export default routerNewUser;
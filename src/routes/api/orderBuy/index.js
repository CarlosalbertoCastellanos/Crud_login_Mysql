
import express from "express";
import statusCode from "../../../utils/statusCode.js";
const router = express.Router();
router.get("/", (req, res) => {
    // * Example send status code 
    // res.status(300).send({ message: "example" })
    console.log(statusCode);

    res.status(200).send({ message: "example" })
})
export default router
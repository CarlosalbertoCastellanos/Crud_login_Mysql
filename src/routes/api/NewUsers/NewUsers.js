import pool from "../../../database.js";

export const existNewUsersId = async (username) => {
    const newUser = await pool.query("SELECT * from user where username = ?", [username]);
    return newUser.length > 0
}
import pool from "../../../database.js";



export const InsertNewUsers = async (username, fullname, password) => {
    // Insertar la orden
    await pool.query("INSERT INTO user (username, fullname, password) VALUES (?, ?, ?)", [username, fullname, password]);
    
};

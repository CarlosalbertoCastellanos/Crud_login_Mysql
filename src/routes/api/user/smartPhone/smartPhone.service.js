import pool from "../../../../database.js";

export const getAllSmartphone = async () => {
    const getFindOrder = await pool.query("SELECT * from smartphone",);
    return getFindOrder
}
export const getAllSmartphoneUser = async (idUser) => {
    const getSmartPhone = await pool.query("SELECT * from smartphone WHERE user_id = ?", [idUser]);
    return getSmartPhone
}

/**
 * 
 * @param {{nombre: string, serie:string, precio:string, imagen:string, descripcion:string}} smartphone 
 * @param {number} idUser 
 */
export const newSmartphoneUser = async (smartphone, idUser) => {

    await pool.query(
        "INSERT INTO smartphone (nombre, serie, precio, descripcion, imagen, user_id) VALUES (?, ?, ?, ?, ?, ?)",
        [smartphone.nombre, smartphone.serie, smartphone.precio, smartphone.descripcion, smartphone.imagen, , idUser]
    );
    return { message: "Insert new smartPhone successfull" }

}

export const deleteSmartphoneUser = async (idSmartPhone, idUser) => {

    await pool.query(
        "DELETE FROM smartphone WHERE id = ?", [idSmartPhone],
        [smartphone.nombre, smartphone.serie, smartphone.precio, smartphone.descripcion, smartphone.imagen, , idUser]
    );
    return { message: "delete smartPhone successfull" }

}

/**
 * 
 * @param {{nombre: string, serie:string, precio:string, imagen:string, descripcion:string}} smartphone 
 * @param {number} idSmartPhone 
 */
export const updateSmartphone = async (smartphone, idSmartPhone) => {

    await pool.query(
        "UPDATE smartphone SET nombre=?, serie=?, precio=?, imagen=?, descripcion=?  WHERE id = ?", [smartphone.nombre, smartphone.serie, smartphone.precio, smartphone.imagen, smartphone.descripcion, idSmartPhone],
    );
    return { message: "update smartPhone successfull" }

}

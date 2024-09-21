import { existNewUsersId } from "./NewUsers.js"

const ExistNewUserMiddleware = async (req, res, next) => {
    const data = req.body;
    
    const exisUser = await existNewUsersId(data.username);
        
    if (!exisUser) {
        next()
    } else {
        return res.status(400).send({ message: "El usuario no existe no existente" })
    }
}
export default ExistNewUserMiddleware;
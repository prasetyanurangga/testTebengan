import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

class UserController {

    static getData = async (req: Request, res: Response) => {
        const userRepository = getRepository(User);
        try {
            var user = []
            if(req.query.relation){
                user = await userRepository.find({
                    relations: [req.query.relation]
                });
            }else{
                user = await userRepository.find();
            }
            
            res.status(200).send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    };

};
export default UserController;


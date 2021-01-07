import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import routes from "./routes";
import {User} from "./entity/User";
import {Ride} from "./entity/Ride";
import * as helmet from "helmet";
import * as cors from "cors";

createConnection().then(async connection => {

    const app = express();
    app.use(bodyParser.json());
    app.use("/", routes);
    app.use(cors())
    app.use(helmet())
    app.listen(3000);

    let user1 = new User();
    user1.first_name = "jaka";
    user1.last_name = "tingkir";

    await connection.manager.save(user1);

    let user2 = new User();
    user2.first_name = "tengku";
    user2.last_name = "umar";


    await connection.manager.save(user2);

    let ride = new Ride();
    ride.from_city_name = "Bandung";
    ride.to_city_name = "Jakarta";
    ride.user_id = user2.id;


    await connection.manager.save(ride);


    console.log("Express server has started on port 3000. Open http://localhost:3000/api/user to see results");

}).catch(error => console.log(error));

import { Request, Response } from 'express'
import { ObjectId } from "mongodb";

import { collections } from "../../database/service";
import User from "../../models/User";

class LoginAuthenticationController {

    async exec (req: Request, res: Response) {

        try {
            // const newGame = req.body as Game;

            const result = await collections?.users?.insertOne({
                email: 'roberto@gmail.com',
                name: 'Thompson M',
                password: 'das'
            });

            result
                ? res.status(201).send(`Successfully created a new game with id ${result.insertedId}`)
                : res.status(500).send("Failed to create a new game.");
        } catch (error: any) {
            console.error(error);
            res.status(400).send(error.message);
        }
    }

}

export default LoginAuthenticationController;
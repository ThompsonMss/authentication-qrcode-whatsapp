import { Request, Response } from 'express'

import { collections } from "../../database/service";
import User from "../../models/User";
import { createCipher } from "../../helpers/createCipher";

class RegisterAuthenticationController {

    async exec (req: Request, res: Response) {

        try {

            const newUser = req.body as User;

            // Checking if user exists.
            const query = { email: newUser.email };
            const userExists = await collections.users?.findOne(query);

            if (userExists)
                throw new Error(`This user is already registered.`);

            newUser.password = createCipher(newUser.password);

            const result = await collections?.users?.insertOne(newUser);

            if (!result)
                throw new Error(`Failed to create a new user.`);

            res.status(201).json({ message: `Successfully created a new game with id ${result.insertedId}` });

        } catch (error: any) {
            res.status(400).json({ error: true, message: error.message });
        }
    }

}

export default RegisterAuthenticationController;
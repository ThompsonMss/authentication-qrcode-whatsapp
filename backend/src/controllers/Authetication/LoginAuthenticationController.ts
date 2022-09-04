import { Request, Response } from 'express'
import jwt from 'jsonwebtoken';

import { collections } from "../../database/service";
import User from "../../models/User";
import { createCipher } from "../../helpers/createCipher";

class LoginAuthenticationController {

    async exec (req: Request, res: Response) {

        try {

            const user = req.body as User;

            // Checking if user exists.
            const query = { email: user.email, password: createCipher(user.password) };
            const userExists = await collections.users?.findOne(query);

            if (userExists) {
                const token = jwt.sign({ id: userExists._id }, `${process.env.SECRET}`);
                return res.json({ auth: true, token: token, user: userExists });
            } else {
                throw new Error(`User not found.`);
            }

        } catch (error: any) {
            res.status(400).json({ error: true, message: error.message });
        }
    }

}

export default LoginAuthenticationController;
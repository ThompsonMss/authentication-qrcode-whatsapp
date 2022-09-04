import { Response } from 'express'
import { ObjectId } from "mongodb";
import jwt from 'jsonwebtoken';

import { collections } from "../../database/service";

class MainDashboardController {

    async exec (req: any, res: Response) {

        try {

            const query = { _id: new ObjectId(req.userId) };
            const userExists = await collections.users?.findOne(query);

            if (userExists) {
                return res.json({ user: userExists });
            } else {
                throw new Error(`User not found.`);
            }

        } catch (error: any) {
            res.status(400).json({ error: true, message: error.message });
        }
    }

}

export default MainDashboardController;
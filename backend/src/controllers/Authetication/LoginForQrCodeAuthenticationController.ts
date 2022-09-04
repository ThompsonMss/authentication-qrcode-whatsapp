import { Response } from 'express'
import { ObjectId } from "mongodb";
import jwt from 'jsonwebtoken';

import { collections } from "../../database/service";

class LoginForQrCodeAuthenticationController {

    async exec (req: any, res: Response) {

        try {

            const { uuid } = req.body;

            const query = { _id: new ObjectId(req.userId) };
            const userExists = await collections.users?.findOne(query);


            return res.json({ success: true });

        } catch (error: any) {
            res.status(400).json({ error: true, message: error.message });
        }
    }

}

export default LoginForQrCodeAuthenticationController;
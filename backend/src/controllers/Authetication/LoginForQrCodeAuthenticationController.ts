import { Response } from 'express'
import { ObjectId } from "mongodb";
import { Server } from "socket.io"
import jwt from 'jsonwebtoken';

import { collections } from "../../database/service";

class LoginForQrCodeAuthenticationController {

    async exec (req: any, res: Response, io: Server) {

        try {

            const { uuid } = req.body;
            const token: any = req.headers['authentication'];

            const query = { _id: new ObjectId(req.userId) };
            const userExists = await collections.users?.findOne(query);

            io.emit(`login-qrcode-${uuid}`, { _id: userExists?._id, token: token });

            return res.json({ success: true });

        } catch (error: any) {
            res.status(400).json({ error: true, message: error.message });
        }
    }

}

export default LoginForQrCodeAuthenticationController;
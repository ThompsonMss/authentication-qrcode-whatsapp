import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";

export function authenticationMiddleware (req: any, res: Response, next: NextFunction) {

    const token: any = req.headers['authentication'];

    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    jwt.verify(token, `${process.env.SECRET}`, function (err: any, decoded: any) {

        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded.id;
        next();
    });

}
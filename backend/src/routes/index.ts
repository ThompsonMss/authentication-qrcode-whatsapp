import { Router, Express } from 'express'
const router = Router();

import LoginAuthenticationController from "../controllers/Authetication/LoginAuthenticationController";

const loginAuthenticationController = new LoginAuthenticationController();

export function routes (app: Express) {

    try {
        app.get('/', (_, res) => res.send('Server is running!'));

        app.post('/login', loginAuthenticationController.exec);
    } catch (error: any) {
        app.response.status(error?.code ?? 400).json({ error: true, message: error.message });
    }

}
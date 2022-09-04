import { Router, Express } from 'express'
const router = Router();

import LoginAuthenticationController from "../controllers/Authetication/LoginAuthenticationController";
import RegisterAuthenticationController from '../controllers/Authetication/RegisterAuthenticationController';

const loginAuthenticationController = new LoginAuthenticationController();
const registerAuthenticationController = new RegisterAuthenticationController();

export function routes (app: Express) {

    app.get('/', (_, res) => res.send('Server is running!'));

    app.post('/login', loginAuthenticationController.exec);
    app.post('/register', registerAuthenticationController.exec);
}
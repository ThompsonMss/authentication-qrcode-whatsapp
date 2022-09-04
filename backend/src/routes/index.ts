import { Router, Express } from 'express'
import { Server } from "socket.io"

const router = Router();

import { authenticationMiddleware } from '../middlewares/authenticationMiddleware';

import LoginAuthenticationController from "../controllers/Authetication/LoginAuthenticationController";
import RegisterAuthenticationController from '../controllers/Authetication/RegisterAuthenticationController';
import MainDashboardController from '../controllers/Dashboard/MainDashboardController';
import LoginForQrCodeAuthenticationController from '../controllers/Authetication/LoginForQrCodeAuthenticationController';


const loginAuthenticationController = new LoginAuthenticationController();
const registerAuthenticationController = new RegisterAuthenticationController();

const mainDashboardController = new MainDashboardController();
const loginForQrCodeAuthenticationController = new LoginForQrCodeAuthenticationController();

export function routes (app: Express, io: Server) {

    app.get('/', (_, res) => res.send('Server is running!'));

    app.post('/login', loginAuthenticationController.exec);
    app.post('/register', registerAuthenticationController.exec);

    app.get('/dashboard', authenticationMiddleware, mainDashboardController.exec);
    app.post('/login-qr-code', authenticationMiddleware, (req, res) => loginForQrCodeAuthenticationController.exec(req, res, io));
}
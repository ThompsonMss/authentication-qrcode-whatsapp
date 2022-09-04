import { Router, Express } from 'express'
const router = Router();

import { authenticationMiddleware } from '../middlewares/authenticationMiddleware';

import LoginAuthenticationController from "../controllers/Authetication/LoginAuthenticationController";
import RegisterAuthenticationController from '../controllers/Authetication/RegisterAuthenticationController';
import MainDashboardController from '../controllers/Dashboard/MainDashboardController';


const loginAuthenticationController = new LoginAuthenticationController();
const registerAuthenticationController = new RegisterAuthenticationController();

const mainDashboardController = new MainDashboardController();

export function routes (app: Express) {

    app.get('/', (_, res) => res.send('Server is running!'));

    app.post('/login', loginAuthenticationController.exec);
    app.post('/register', registerAuthenticationController.exec);

    app.get('/dashboard', authenticationMiddleware, mainDashboardController.exec);
}
import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import { connectToDatabase } from "./database/service"

import { routes } from './routes';

const app = express();
app.use(express.json());

app.use(cors({
    origin: '*'
}));

connectToDatabase().then(() => {

    routes(app);
    app.listen(4000, () => console.log('Server started in port 4000'));

}).catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
});


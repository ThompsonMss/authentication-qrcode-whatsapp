import 'dotenv/config'

import express from 'express'
import cors from "cors"
import http from "http"
import { Server } from "socket.io"

import { connectToDatabase } from "./database/service"

import { routes } from './routes';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());

app.use(cors({
    origin: '*'
}));

connectToDatabase().then(() => {

    io.on('connection', (socket) => {
        console.log('a user connected');
    });

    routes(app);
    server.listen(4000, () => console.log('Server started in port 4000'));

}).catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
});


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

const whitelist = ["http://localhost:5173", "0.0.0.0"]

const corsOptions = {
    origin: function (origin: any, callback: any) {
        console.log(origin)
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}

app.use(cors(corsOptions))

connectToDatabase().then(() => {

    io.on('connection', (socket) => {
        console.log('a user connected');
    });

    routes(app, io);
    server.listen(4000, () => console.log('Server started in port 4000'));

}).catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
});


import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import Connection from './database/connection'

import { routes } from './routes';

Connection.startConn();

const app = express();
app.use(express.json());
app.use(cors());

routes(app);

app.listen(4000, () => console.log('Server started in port 4000'));
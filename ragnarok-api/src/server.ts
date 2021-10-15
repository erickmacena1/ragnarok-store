import 'dotenv/config'

import express from 'express';
import cors from 'cors'
import path from 'path'
import { routes } from './api/routes';

const env = process.env

const PORT = env.PORT || env.DEV_PORT || 3000

const server = express();

server.use(cors())
server.use(express.json())
server.use(routes);
server.use('/image', express.static(path.join(__dirname, '..', 'uploads')))

server.listen(PORT, () => console.log('Server está rodando!'));

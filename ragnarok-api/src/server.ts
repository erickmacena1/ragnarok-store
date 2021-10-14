import 'dotenv/config'

import express from 'express';
import { productRoutes } from './api/routes/productRoutes';
import cors from 'cors'
import path from 'path'
import { checkoutRouter } from './api/routes/checkoutRoutes';

const env = process.env

const PORT = env.PORT || env.DEV_PORT || 3000

const server = express();

server.use(cors())
server.use(express.json())
server.use(productRoutes);
server.use(checkoutRouter);
server.use('/image', express.static(path.join(__dirname, '..', 'uploads')))

server.listen(PORT, () => console.log('Server está rodando!'));

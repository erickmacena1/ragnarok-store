import 'dotenv/config'

import express from 'express';
import { productRoutes } from './api/routes/productRoutes';
import cors from 'cors'

const server = express();

server.use(cors())
server.use(express.json())
server.use(productRoutes);

server.listen(3000, () => console.log('Server está rodando!'));

import "dotenv/config"
import express, { Router } from  'express';
import connetDB from "./config/db.js";
import empleadosRouter from "./routers/empleados.js";
import departamentosRouter from "./routers/departamentos.js";
import dns from 'node:dns';
if (process.env.NODE_ENV !== 'production') {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
}

const server = express();
const PORT = process.env.PORT || 3400;

connetDB();

server.use(express.json());
server.use('/empleados', empleadosRouter);
server.use('/departamentos',departamentosRouter);

server.get('/', (req, res) => {
    res.status(204).send();
});


server.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});
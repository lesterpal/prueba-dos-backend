import { Router } from 'express';
import empleadosController from "../controllers/empleados.js";

const empleadosRouter = Router();

empleadosRouter.post("/",empleadosController.create);
empleadosRouter.get("/",empleadosController.readAll);
empleadosRouter.get("/:id",empleadosController.read);
empleadosRouter.put("/:id",empleadosController.update);
empleadosRouter.delete("/:id",empleadosController.delete);

export default empleadosRouter;
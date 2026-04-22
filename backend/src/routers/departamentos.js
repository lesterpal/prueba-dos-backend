import { Router } from 'express';
import departamentosController from "../controllers/departamentos.js";

const departamentosRouter = Router();

departamentosRouter.post("/",departamentosController.create);
departamentosRouter.get("/",departamentosController.readAll);
departamentosRouter.get("/:id",departamentosController.read);
departamentosRouter.get("/:id",departamentosController.readEmpleados);
departamentosRouter.put("/:id",departamentosController.update);
departamentosRouter.delete("/:id",departamentosController.delete);


export default departamentosRouter;
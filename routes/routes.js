import { Router } from "express";
import validarDatos from "../middlewares/validationMiddleware.js";
import SondasController from "../controllers/SondasController.js";

const routes = Router();
const sondasController = new SondasController();

// endpoints
routes.post('/sondas', validarDatos, sondasController.ingresarDatos);
routes.get('/sondas', sondasController.listarSondas);
routes.get('/sonda/:id', sondasController.listarSondasPorId);

export default routes;

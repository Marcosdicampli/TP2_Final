import { Router } from "express";
import PalabrasController from "../controllers/PalabrasController.js";

const routes= Router()

const palabrasController=new PalabrasController()

//endpoints

routes.post("/",palabrasController.createPalabra)
routes.get("/",palabrasController.getPalabras)
routes.delete("/:palabra",palabrasController.deletePalabra)
//routes.get("/:id")

//routes.delete("/:id")
//routes.get("/:id")




export default routes
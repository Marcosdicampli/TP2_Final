import Palabra from "../Model/Palabra.js";

class PalabrasController {

 palabra=new Palabra();


  //funcion base estructura
  createPalabra=async(req,res)=>{
      try {
        const {palabra}=req.body;

        if(!palabra || !/^[a-zA-Z]+$/.test(palabra)) throw error;
        
        const newPalabra=await this.palabra.create(palabra);

          res.status(200).send(newPalabra);
      } catch (error) {
          res.status(422).send("No Valida");
      }
  };

  getPalabras=async(req,res)=>{
      try {
        const palabras = await this.palabra.getAll();
          res.status(200).send(palabras);
      } catch (error) {
          res.status(422).send("No Valida");
      }
  };

  deletePalabra=async(req,res)=>{
      try {
          res.status(200).send("Palabra eliminada correctamente");
      } catch (error) {
          res.status(422).send("Palabra No Valida");
      }
  };



}

export default PalabrasController
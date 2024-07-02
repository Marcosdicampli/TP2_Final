import Sonda from "../Model/Sonda.js";

class SondasController {

 ingresarDatos =async (req,res)=>{
    const {id, temperatura} = req.body;
    const newSonda = await Sonda.create(id,temperatura);
    res.status(200).json(newSonda);
  };

   listarSondas=async(req, res)=>{
    const sondasAListar = Sonda.getAll();
    res.status(200).json(sondasAListar);
  };

   listarSondasPorId=async (req,res)=> {
    const {id } =req.params;
    const sondas= Sonda.getById(parseInt(id));
    if (sondas.length === 0) {
      return res.status(404).send("Número de sonda incorrecto");
    }
    res.status(200).json(sondas);
  };

}

export default SondasController;
const validarDatos = (req, res, next) => {
    const { id, temperatura } = req.body;
    if (!id || !temperatura || id < 1 || id > 5 || temperatura < -20 || temperatura > 100) {
      return res.status(422).send("datos no válidos");
    }
    next();
  };
  
  export default validarDatos;
  
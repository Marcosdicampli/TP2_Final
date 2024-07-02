class Sonda{

sondas = [];

  create=async(id, temperatura)=>{
    const fechaHora = new Date();
    const sonda = {
      sondaId: id,
      temperatura,
      fechaHora,
    };
    this.sondas.push(sonda);
    return sonda;
  }

  async getAll() {
    return this.sondas;
  }

getById(id) {
    return this.sondas.filter(entry => entry.sondaId === id);
  }

}

export default new Sonda();
//export default Sonda;
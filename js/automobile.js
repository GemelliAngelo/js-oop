class Automobile extends Veicolo {
  numeroPorte;
  carburante;

  constructor(marca, anno, colore, numeroPorte, carburante) {
    super(marca, anno, colore);
    this.numeroPorte = numeroPorte;
    this.carburante = carburante;
  }

  moreInfo() {
    return `Questa automobile ha ${this.numeroPorte} porte ed è alimentata a ${this.carburante}`;
  }
}

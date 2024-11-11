class Veicolo {
  marca;
  anno;
  colore;

  constructor(marca, anno, colore) {
    this.marca = marca;
    this.anno = anno;
    this.colore = colore;
  }
}

const Fiat = new Veicolo("Fiat", 2019, "blu");
console.log(Fiat);

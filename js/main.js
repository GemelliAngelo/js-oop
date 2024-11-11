class Veicolo {
  marca;
  anno;
  colore;

  constructor(marca, anno, colore) {
    this.marca = marca;
    this.anno = anno;
    this.colore = colore;
  }

  informazioni() {
    return `Questo veicolo è una ${this.marca} del ${this.anno} di colore ${this.colore}`;
  }
}

const Fiat = new Veicolo("Fiat", 2019, "blu");
console.log(Fiat.informazioni());

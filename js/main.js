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

  calcolaEta() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const age = currentYear - this.anno;
    return `Questo veicolo ha ${age} anni di vita`;
  }
}

const Fiat = new Veicolo("Fiat", 2019, "blu");
console.log(Fiat.informazioni());
console.log(Fiat.calcolaEta());

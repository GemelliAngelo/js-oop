const Fiat = new Veicolo("Fiat", 2019, "blu");
console.log(Fiat.informazioni());
console.log(Fiat.calcolaEta());

const Opel = new Automobile("Opel", 2020, "nero", 4, "benzina");
console.log(
  `Questa automobile ha ${Opel.numeroPorte} porte ed è alimentata a ${Opel.carburante}`
);

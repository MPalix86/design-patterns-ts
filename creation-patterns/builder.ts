/**
 * Author Mirco Palese
 * 13-02-2024
 *
 * Il builder pattern è un design pattern creazionale che ci permette
 * di costruire oggetti complessi aggiungendo poco alla volta i pezzi che ci servono
 * e basta.
 *
 * Immaginiamo di avere un oggetto molto complesso, per le diverse istanze di qeusto
 * oggetto non sempre abbiamo bisogno di tutte le sue proprietà.
 *
 * immaginiamo una casa: possiamo avere un sacco di optional che non
 * che possiamo voler mettere in base alle esigenze, come ad esempio la piscina se è una casa costruita in una
 * zona dove il clima è caldo, la sauna se il clima è freddo.
 *
 * Per risolvere questo problema potrei utilizzare una classe Casa con tutte le proprieta immaginabili per
 * una casa e usare solo qeulle che voglio, tuttavia mi ritrovberei ogni volta che creo un istanza
 * una classe qualcosa del tipo const casa = new Casa('name', 43m^2, 'piscina' , null, null, null,null)
 * perche io voglio  solo la piscina e tutto il resrto non mi interessa.
 *
 * oppure potrei usare tante sottoclassi quanti sono gli atrtibuti opzionali, ma non risolverei nulla perche
 * acvei 1000 sotto classi e file da gestire.
 *
 * l pattern organizza la costruzione degli oggetti in un insieme di passaggi
 * (costruireMuri, costruirePorta, ecc.). Per creare un oggetto, esegui una serie di questi passaggi
 * su un oggetto builder. La parte importante è che non è necessario chiamare tutti i passaggi.
 * Puoi chiamare solo quei passaggi necessari per produrre una configurazione particolare di un oggetto.
 * Alcuni dei passaggi di costruzione potrebbero richiedere un'implementazione diversa quando è
 * necessario costruire varie rappresentazioni del prodotto. Ad esempio, i muri di una capanna
 * possono essere costruiti in legno, ma i muri di un castello devono essere costruiti in pietra.
 *
 * possiamo andare oltre e ed estrarre una serie di chiamate ai passaggi di costruzione che utilizzi per
 * costruire un prodotto in una classe separata chiamata direttore. La classe del direttore definisce
 * l'ordine in cui eseguire i passaggi di costruzione, mentre il builder fornisce l'implementazione
 * per quei passaggi. Il direttore sa quali passaggi di costruzione eseguire per ottenere un prodotto
 * funzionante. Avere una classe direttore nel tuo programma non è strettamente necessario.
 * Puoi sempre chiamare i passaggi di costruzione in un ordine specifico direttamente dal codice client.
 * Tuttavia, la classe direttore potrebbe essere un buon posto per mettere varie routine di
 * costruzione in modo da poterle riutilizzare in tutto il tuo programma. Inoltre, la classe direttore
 * nasconde completamente i dettagli della costruzione del prodotto dal codice client.
 * Il cliente deve solo associare un builder a un direttore, avviare la costruzione con il direttore
 * e ottenere il risultato dal builder.
 *
 * nel pratico in cosa consiste e come possiamo implementarlo?
 *
 * abbiamo la  classe che contiene n attributi. deleghiamo l'istanziamento di questi attributi ad una
 * classe interna chiamata buider che semplicemente si occupa di settare solo gli attributi che ci servono
 *
 *
 */

class Car {
  marca: string;
  modello: string;
  anno: number;
  colore: string;
  numeroPorte: number;
  prezzo: number;

  constructor(builder: CarBuilder) {
    this.marca = builder.marca;
    this.modello = builder.modello;
    this.anno = builder.anno;
    this.colore = builder.colore;
    this.numeroPorte = builder.numeroPorte;
    this.prezzo = builder.prezzo;
  }
}

class CarBuilder {
  marca: string;
  modello: string;
  anno: number = 0;
  colore: string = "";
  numeroPorte: number = 4;
  prezzo: number = 0;

  constructor(marca: string, modello: string) {
    this.marca = marca;
    this.modello = modello;
  }

  setAnno(anno: number): CarBuilder {
    this.anno = anno;
    return this;
  }

  setColore(colore: string): CarBuilder {
    this.colore = colore;
    return this;
  }

  setNumeroPorte(numeroPorte: number): CarBuilder {
    this.numeroPorte = numeroPorte;
    return this;
  }

  setPrezzo(prezzo: number): CarBuilder {
    this.prezzo = prezzo;
    return this;
  }

  build(): Car {
    return new Car(this);
  }
}

// Utilizzo del Builder pattern
const car = new CarBuilder("Toyota", "Corolla")
  .setAnno(2022)
  .setColore("Blu")
  .setNumeroPorte(4)
  .setPrezzo(25000)
  .build();

console.log(car);

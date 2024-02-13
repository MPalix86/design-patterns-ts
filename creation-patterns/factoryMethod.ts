/**
 * Author : Mirco Palese
 * 12-02-2024
 *
 * FACTORY METHOD
 *
 * Il factory method è un pattern creazionale che fornisce un'interfaccia per la creazione di oggetti
 * in una superclasse, ma consente alle sottoclassi di modificare il tipo degli oggetti che verranno creati.
 *
 * prima di tutto per capire questo pattern bisogna sapere cosa la differenza tra classi astratte e interfacce.
 * Entrmbe sono contratti che vincolano le classi che le estondono o le implementano a rispettare determinate
 * regole, ma con alcune differenze.
 *
 * Le classi astratte sono una base comune per creare oggetti con caratteristiche comuni, infatti le classi
 * Le classi astratte sono elle classe vere e proprie e forniscono una base comune per creare oggetti
 * con caratteristiche comuni, infatti le classi astratte possono avere metodi concreti e non
 * ( ovvero da implementare), attributi ecc , e le loro sotto classi possono
 * accedere a quei metodi concreti a anche agli attributi sovrascrivendoli anche se serve .
 *
 * Le interfacce invece forniscono solo metodi astratti, ovvero obbliga chi le implementa
 * a rispettare un contratto e quindi definire e scrivere i metodi specificati nell'interfacica stessa.
 * Le interfacce possono contenere solo costanti non varibili di istanza e non hanno un costruttore.
 * Le classi possono implementare n interfacce, ma possono estendere una sola classe astratta per volta.
 *
 * Ora vediamo a cosa serve il factory e che problema risolve.
 *
 * Detta brutalmente ci permette di determinare l'istanza di cui abbiamo bisogno a runtime senza doverla
 * allocare a priori.
 *
 * Immaginiamo di voler creare un' interfaccia (dialog)che funzioni sia su web che su ambienti desktop.
 * ovviamente il codice per generare la finestra e il tasto non sara lo stesso nei 2 casi, ma il risultato si:
 * ovvero quello di mostrare un dialog.
 *
 * quello che voglio ottenere è :
 *
 * 1) decidere a runtime l'stanza specifica dell'oggetto che volgio creare (web o desktop)
 * 2) avere lo stesso metodo di creazione indipendentemente dal tipo di dialog che voglio creare
 * 2) mantenere il codice quanto piu disaccoppiato possibile.
 *
 * Riassumiamo il problema : ho 2 tipi di dialog diversi, 2 tipi di button diversi
 *
 * SOLUZIONE
 *
 * prima di tutto creo in base alle esigenze una classe astratta o un interfaccia per il dialog e per il
 * button, questo mi permettera successivamente di sfruttare il polimorfismo e decidere a runtime l'istanza
 * da creare.
 *
 */

abstract class Dialog {
  title: string;
  height: number;
  width: number;
  abstract reder(): void;
  constructor(title: string, height: number, width: number) {
    this.title = title;
    this.height = height;
    this.width = width;
  }
}

class DesktopDialog extends Dialog {
  constructor(title: string, height: number, width: number) {
    super(title, height, width);
  }

  reder() {
    console.log("renderizzo DesktopDialog");
  }
}

class WebDialog extends Dialog {
  constructor(title: string, height: number, width: number) {
    super(title, height, width);
  }

  reder() {
    console.log("render web dialog");
  }
}

// usage :

const rand = Math.random() > 0.5 ? "desktop" : "web";

let dialog!: Dialog;

if (rand == "desktop") dialog = new DesktopDialog("title", 100, 100);
else if (rand == "web") dialog = new WebDialog("title", 100, 100);

dialog.reder();

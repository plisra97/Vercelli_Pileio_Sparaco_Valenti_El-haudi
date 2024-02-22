// gestione-spese.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-gestione-spese',
  templateUrl: './gestione-spese.component.html',
  styleUrls: ['./gestione-spese.component.css'],
  
})
export class GestioneSpeseComponent {
  nuovaVoce: string = ''; 

  // spese: { tipo: string, importo: number }[] = [];

  // aggiungiVoce() {
  //   const tipo = this.nuovaVoce.startsWith('-') ? 'spesa' : 'entrata';
  //   const importo = parseFloat(this.nuovaVoce);
  //   if (!isNaN(importo)) {
  //     this.spese.push({ tipo, importo });
  //     this.nuovaVoce = ''; 
  //   }
  // }

  // rimuoviVoce(index: number) {
  //   this.spese.splice(index, 1);
  // }




  spesa : string = '';
  entrata : string = '';
  tipo : string = '';


  spese: { tipo: string, importo: number }[] = [];
  totale: number =0;
  aggiungiVoce() {
    const importo = parseFloat(this.nuovaVoce);
    if (!isNaN(importo)) {
      this.spese.push({ tipo: this.tipo, importo: importo });
      this.nuovaVoce = ''; 
      if (this.tipo === 'spesa') {
        this.totale -= importo;
      } else {
        this.totale += importo;
      }
    }
  }
  

  rimuoviVoce(index: number) {
    const voce = this.spese[index];
    if (voce.tipo === 'spesa') {
      this.totale += voce.importo;
    } else {
      this.totale -= voce.importo;
    }
    this.spese.splice(index, 1);
  }
 

  
}

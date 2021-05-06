
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

// Utilisation du plugins Capacitor
const { Storage } = Plugins;

// Clef sur laquelle on enregistre les données
const STORAGE_KEY = "concert-times";

@Injectable({
  providedIn: 'root'
})
export class ConcertTimeService {

    name = 'Gestion des Concert'

    private concerTimes = [];

    public input = {
          Nom:null,
          Type:null,
          Date:null,
          Salle:null,
          Ville:null,
          Note:null,
          Commentaire:null
    }
  

  constructor() { }
  public getName() {
    return this.name;
  }

  public setName(newName){
    this.name = newName;
  }
  // module storage
  public async getConcertTime(){
    const data = await Storage.get({key:STORAGE_KEY});
    this.concerTimes = JSON.parse(data.value) || [];
    return this.concerTimes;
  }
  // creation d'un objet avec la saisie
  public getConcertData(){
    return{
      Nom: this.input.Nom,
      Type:   this.input.Type,
      Date: this.input.Date,
      Salle: this.input.Salle,
      Ville: this.input.Ville,
      Note: this.input.Ville,
      Commentaire: this.input.Commentaire
    }
  }
  // ajout d'un nouveau groupe ou artist
  public  addConcert(data){
    this.concerTimes.push(data);
    this.input.Nom = null;
    this.input.Type = null;
    this.input.Date = null;
    this.input.Salle = null;
    this.input.Ville= null;
    this.input.Note = null;
    this.input.Commentaire = null;
    this.persist();
  }

public updateConcert( ){
  
  this.persist();
}

   private async persist(){
    await Storage.set({
      key: STORAGE_KEY,
      value: JSON.stringify(this.concerTimes)
    });
   }
 // validation de la saisie
 public enregistInput() {
  // la saisie ne peut etre vide
  return this.input.Nom && this.input.Date && this.input.Salle;
}

public deleteConcert(pos) {
  // Suppression d'un élément 
  this.concerTimes.splice(pos, 1);
  this.persist();
}


}//fin

import { Router } from '@angular/router';
import { ConcertTimeService } from './../concert-time.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  // tableau de concert
  public concertTimes = [];
  //le concert selectionné
  public chosenconcert = null;



  constructor(public concertTimeService: ConcertTimeService,
       private alertCtrl: AlertController,private router:Router
       ) {}

      public async ngOnInit(){
        this.concertTimes = await this.concertTimeService.getConcertTime();
      }

       public async deleteOneconcert(pos){
       const alert = await this.alertCtrl.create({
         header:'Voulez-vous vraiment supprimer ce Concert',
         message: 'Pas de Retour en Arrière après suppression',
         buttons:[
                   { text: 'Non'},
                   {text:'Oui',
                    handler: ()=>{ this.concertTimeService.deleteConcert(pos) }
                   }
                 ]
       });
       alert.present();
  }
   public goUpdateConcert (position){
     this.concertTimeService.input = this.concertTimes[position]
     this.router.navigateByUrl('/update-concert');
   }

}

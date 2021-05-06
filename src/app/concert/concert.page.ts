import { ConcertTimeService } from './../concert-time.service';
import { Component, OnInit } from '@angular/core';
import  { Router } from'@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.page.html',
  styleUrls: ['./concert.page.scss'],
})
export class ConcertPage implements OnInit {

  constructor(public concertTimeService:ConcertTimeService,
    private router : Router,
    private toastCtrl: ToastController
    ) { 
    
      this.concertTimeService.setName ('Programmes Concert ');

    }

  ngOnInit() {
  }
 public async enregistConcert(){
  if(!this.concertTimeService.enregistInput()){
    const toast = await this.toastCtrl.create({
      message: 'Veuilliez Remplir les Champs ',
      color: 'danger',
      position: 'top',
      duration: 1000
    });

       toast.present();
       return
  }
      this.concertTimeService.addConcert(this.concertTimeService.getConcertData()
  );

  // todo redirection vers home
    this.router.navigateByUrl('/home');

 }
}

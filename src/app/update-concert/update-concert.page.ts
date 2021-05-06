import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConcertTimeService } from '../concert-time.service';

@Component({
  selector: 'app-update-concert',
  templateUrl: './update-concert.page.html',
  styleUrls: ['./update-concert.page.scss'],
})
export class UpdateConcertPage implements OnInit {

  constructor(public concertTimeService: ConcertTimeService,private router:Router) { }

  ngOnInit() {
  }
      public updateOneConcert (){
        this.concertTimeService.updateConcert();
        this.router.navigateByUrl('/home')
      }

}

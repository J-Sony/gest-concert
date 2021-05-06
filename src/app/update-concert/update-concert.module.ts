import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateConcertPageRoutingModule } from './update-concert-routing.module';

import { UpdateConcertPage } from './update-concert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateConcertPageRoutingModule
  ],
  declarations: [UpdateConcertPage]
})
export class UpdateConcertPageModule {}

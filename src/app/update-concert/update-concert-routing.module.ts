import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateConcertPage } from './update-concert.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateConcertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateConcertPageRoutingModule {}

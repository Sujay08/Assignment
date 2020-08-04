import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateWeatherModalPage } from './update-weather-modal.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateWeatherModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateWeatherModalPageRoutingModule {}

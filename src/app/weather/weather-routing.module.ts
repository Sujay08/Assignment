import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherPage } from './weather.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherPage
  },
  {
    path: 'update-weather-modal',
    loadChildren: () => import('./update-weather-modal/update-weather-modal.module').then( m => m.UpdateWeatherModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherPageRoutingModule {}

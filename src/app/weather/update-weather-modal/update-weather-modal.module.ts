import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateWeatherModalPageRoutingModule } from './update-weather-modal-routing.module';

import { UpdateWeatherModalPage } from './update-weather-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateWeatherModalPageRoutingModule
  ],
  declarations: [UpdateWeatherModalPage]
})
export class UpdateWeatherModalPageModule {}

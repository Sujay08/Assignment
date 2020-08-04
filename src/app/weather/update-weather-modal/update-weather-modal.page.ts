import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
@Component({
  selector: 'app-update-weather-modal',
  templateUrl: './update-weather-modal.page.html',
  styleUrls: ['./update-weather-modal.page.scss'],
})
export class UpdateWeatherModalPage implements OnInit {

  weatherDetails;
  update: boolean;

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.update = false;
  }

  updateWeather(){
    this.update = true;
    this.dismissWeatherModal();
  }

  dismissWeatherModal(){
    this.modalController.dismiss(this.update);
  }

}

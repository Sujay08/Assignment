import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { Platform } from '@ionic/angular';
import { ToastService } from '../service/toast/toast.service'
import { ModalController } from '@ionic/angular'
import { UpdateWeatherModalPage } from "./update-weather-modal/update-weather-modal.page";
@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  like: any;
  notSubmitted: boolean = true;
  cityID: any = 4;
  currentWeather: any;
  checkCurrentWeather: any;
  constructor(
    private http: HttpClient,
    public loadingController: LoadingController,
    private fireStore: AngularFirestore,
    private fireAnalytics: AngularFireAnalytics,
    public platform: Platform,
    private toastService:ToastService,
    private modalController: ModalController
  ) {
    this.platform.resume.subscribe(async () => {
      this.checkWeatherOnReturn();
    });
  }

  ngOnInit() {
    this.getCityWeather();
  }

  async openUpdateWeatherModal(newWeatherData: any){
    const modal = await this.modalController.create({
      component: UpdateWeatherModalPage,
      cssClass: 'weather-modal',
      componentProps: {
        weatherDetails: newWeatherData,
      }
    });

    modal.onDidDismiss()
      .then((update) => {
        const status = update;
        if(status.data == true){
          // this.checkWeatherOnReturn();
          this.currentWeather = this.checkCurrentWeather;
        }
    });

    return await modal.present();
  }

  cityData = [
    {
      id: '0',
      name: 'Delhi',
      lat: '28.644800',
      lon: '77.216721',
    }, {
      id: '1',
      name: 'Mumbai',
      lat: '19.076090',
      lon: '72.877426',
    },
    {
      id: '2',
      name: 'Kolkata',
      lat: '22.572645',
      lon: '88.363892',
    },
    {
      id: '3',
      name: 'Chennai',
      lat: '13.067439',
      lon: '80.237617',
    },
    {
      id: '4',
      name: 'Bangalore',
      lat: '12.972442',
      lon: '77.580643',
    },


  ];


  // weatherAPI = 'http://api.weatherstack.com/current?access_key=902d5b3808f367bb354460bb7a3ed2fd&query=36.59788913307022,-79.80468750000001';

  mapboxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=1&access_token=pk.eyJ1Ijoic2hhc2hpMDciLCJhIjoiY2thNXJiMGIyMDJzbDNmazNnemQwbWhkbyJ9.N8N9sQBTZBgOr_EX0-NWDQ';

  getCityWeather() {
    localStorage.setItem('cityID', this.cityID);
    let cityLat = this.cityData[this.cityID].lat;
    let cityLon = this.cityData[this.cityID].lon;    
    let weatherAPI = 'http://api.weatherstack.com/current?access_key=902d5b3808f367bb354460bb7a3ed2fd&query=' + cityLat + ',' + cityLon;

    this.http.get(weatherAPI).subscribe(res => {
      this.currentWeather = res;
    }, err => {
      console.log(err);
    });
  }

  checkWeatherOnReturn(){
    let cityID = localStorage.getItem('cityID');
    let cityLat = this.cityData[cityID].lat;
    let cityLon = this.cityData[cityID].lon;  
    let weatherAPI = 'http://api.weatherstack.com/current?access_key=902d5b3808f367bb354460bb7a3ed2fd&query=' + cityLat + ',' + cityLon;
    this.http.get(weatherAPI).subscribe(res => {
      this.checkCurrentWeather = res;
      if(this.checkCurrentWeather.current.temperature === this.currentWeather.current.temperature){
          this.toastService.displayToast('Weather upto date');
      }else{
        this.openUpdateWeatherModal(this.checkCurrentWeather);
      }
      
    }, err => {
      console.log(err);
    });
  }



  likeSubmission(status: string) {
    this.fireAnalytics.logEvent('feedback', { name: status })
      .then(() => console.log('Event successfully tracked'))
      .catch(err => console.log('Error tracking event:', err));
  }
}



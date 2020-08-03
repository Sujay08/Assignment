import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit{

  like: any ;
  notSubmitted: boolean = true;
  cityID: any;
  currentWeather: any; 

  constructor(
    private http: HttpClient,
    public loadingController: LoadingController,
    private fireStore: AngularFirestore,
  ) { 
    
  }

  ngOnInit() {
    // this.getWeather();
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
    let cityLat = this.cityData[this.cityID].lat;
    let cityLon = this.cityData[this.cityID].lon;
    console.log(cityLat, cityLon);
    this.presentLoading()
    let weatherAPI = 'http://api.weatherstack.com/current?access_key=902d5b3808f367bb354460bb7a3ed2fd&query=' + cityLat + ',' + cityLon;

    this.http.get(weatherAPI).subscribe(res => {
      this.currentWeather = res;
      this.loadingController.dismiss();
    }, err => {
      console.log(err);
      this.loadingController.dismiss();
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


  likeSubmission(status: string) {
    // this.like.status = status;
    // this.fireStore.collection('Likes').add(this.like);
    let eventParams = {}

  }

}

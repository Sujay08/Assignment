import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-gallery-home',
  templateUrl: './gallery-home.page.html',
  styleUrls: ['./gallery-home.page.scss'],
})
export class GalleryHomePage implements OnInit {

  imgDataArray:any = [];
  imgDataObj: any = {};

  constructor(
    private camera: Camera,
    private router: Router,
    ) { }

  ngOnInit() {
  }
  

  takePictiure(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     if(this.imgDataArray.length == 0){
      this.imgDataObj.id = 1;
    }else{
      this.imgDataObj.id = this.imgDataArray.length + 1;
    }
    this.imgDataObj.imageName = 'my Image ' + this.imgDataObj.id;
    this.imgDataObj.imageData = base64Image;
    this.imgDataObj.date = new Date();

    console.log('imgDataObj', this.imgDataObj);

    this.imgDataArray.push(JSON.parse(JSON.stringify(this.imgDataObj)));
    console.log(this.imgDataArray);

    }, (err) => {
     // Handle error
    });
  }

  ViewGallery() {
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.imgDataArray
      }
    };
    this.router.navigate(['gallery'], navigationExtras);
  }
}

//id
//imageName
//imageData
//date

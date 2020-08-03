import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  currentImage: any;
  fileDetails: any = {};
  // existingFilePath : any;
  // existingFileName : any;
  // displayImage: any;

  ngOnInit(){
    let getLocalObj = JSON.parse(localStorage.getItem('imgPath'))
    if(getLocalObj){
      this.fileDetails.fileName = getLocalObj.fileName
      this.fileDetails.filePath = getLocalObj.filePath
    }
  }

  constructor(
    private camera: Camera,
    private file: File,
    private webview: WebView,
    private sanitizer: DomSanitizer,
  ) {}

  
  
 async takePicture() {
   if(this.fileDetails){
     this.file.removeFile(this.fileDetails.filePath, this.fileDetails.fileName);
   }

      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }

      // console.log('options:', options);
      
      const tempImage = await this.camera.getPicture(options);
      const tempFilename = tempImage.substr(tempImage.lastIndexOf('/') + 1);
      this.fileDetails.fileName = tempFilename;
      const tempBaseFilesystemPath = tempImage.substr(0, tempImage.lastIndexOf('/') + 1);
      this.fileDetails.filePath = tempBaseFilesystemPath;
      localStorage.setItem('imgPath', JSON.stringify(this.fileDetails));     
      const newBaseFilesystemPath = this.file.dataDirectory;

      
      await this.file.copyFile(tempBaseFilesystemPath, tempFilename, newBaseFilesystemPath, tempFilename);
      
      const storedPhoto = newBaseFilesystemPath + tempFilename;

      const resolvedImg = this.webview.convertFileSrc(storedPhoto);

      const safeImg = this.sanitizer.bypassSecurityTrustUrl(resolvedImg);


      this.currentImage = safeImg;

  }
}

// takePicture() {
//   const options: CameraOptions = {
//     quality: 100,
//     destinationType: this.camera.DestinationType.FILE_URI,
//     encodingType: this.camera.EncodingType.JPEG, 
//     mediaType: this.camera.MediaType.PICTURE
//   };

//   this.camera.getPicture(options).then((imageData) => {
//     this.currentImage = 'data:image/jpeg;base64,' + imageData;
//   }, (err) => {
//     // Handle error
//     console.log("Camera issue:" + err);
//   });
// }
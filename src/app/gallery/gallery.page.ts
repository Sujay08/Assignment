import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  currentImage: any =[];
  fileDetails: any = {};
  localPhotoArray: any = [];
  newImageIndex: number;
  data: any;

  ngOnInit(){
   
  }

  constructor(
    private route: ActivatedRoute, 
    private router: Router
  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.data = this.router.getCurrentNavigation().extras.state.user;
      console.log(this.data);
    }
  }

  

}

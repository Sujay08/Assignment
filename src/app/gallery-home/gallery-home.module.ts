import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalleryHomePageRoutingModule } from './gallery-home-routing.module';

import { GalleryHomePage } from './gallery-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalleryHomePageRoutingModule
  ],
  declarations: [GalleryHomePage]
})
export class GalleryHomePageModule {}

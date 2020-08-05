import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//modals
import { UpdateWeatherModalPageModule } from "./weather/update-weather-modal/update-weather-modal.module";
//services
import { ToastService } from "./service/toast/toast.service";
//plugins
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { AngularFireModule } from '@angular/fire';
import firebaseConfig from "./firebase"
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';

// import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    //firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    // AngularFirestore
    //Modals
    UpdateWeatherModalPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    File,
    WebView,
    ToastService,
    // FirebaseAnalytics,

    // firebaseConfig,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

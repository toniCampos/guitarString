import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FretboardComponent } from './fretboard/fretboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { HttpService } from './services/httpService.service';


@NgModule({
  declarations: [AppComponent, FretboardComponent],
  entryComponents: [FretboardComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    HttpService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

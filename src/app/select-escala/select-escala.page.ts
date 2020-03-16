import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-select-escala',
  templateUrl: './select-escala.page.html',
  styleUrls: ['./select-escala.page.scss'],
})
export class SelectEscalaPage {

  constructor(public navCtrl: NavController, public platform: Platform, private nativeAudio: NativeAudio) { 
    this.nativeAudio.preloadSimple('uniqueId1', 'assets/audio/guitarra_2.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log("error");
    });
  }

  play(){
    this.nativeAudio.play('uniqueId1').then((success)=>{
      console.log("success playing");
    },(error)=>{
      console.log("errorrrrr");
    });
  }


  Fretboard() {
    this.navCtrl.navigateForward("/fretboard");
  }
  Home(){
    this.navCtrl.navigateForward("/home");
  }
}

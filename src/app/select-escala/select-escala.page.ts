import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { HttpService } from '../services/httpService.service';

@Component({
  selector: 'app-select-escala',
  templateUrl: './select-escala.page.html',
  styleUrls: ['./select-escala.page.scss'],
})
export class SelectEscalaPage implements OnInit{

  constructor(public navCtrl: NavController, public platform: Platform, private nativeAudio: NativeAudio, private httpSrv: HttpService) { 
    this.nativeAudio.preloadSimple('uniqueId1', 'assets/audio/guitarra_2.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log("error");
    });
  }
  escalas: any;
  A: any;
  B: any;
  C: any;
  D: any;
  E: any;
  F: any;
  G: any;

  ngOnInit() {
    this.httpSrv.getScales()
    .subscribe(res => {
      this.escalas = res;
      console.log(this.escalas);
      this.A = this.escalas.A;
      this.B = this.escalas.B;
      this.C = this.escalas.C;
      this.D = this.escalas.D;
      this.E = this.escalas.E;
      this.F = this.escalas.F;
      this.G = this.escalas.G;
    })
  }

  play(){
    this.nativeAudio.play('uniqueId1').then((success) => {
      console.log("success playing");
    },(error) => {
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

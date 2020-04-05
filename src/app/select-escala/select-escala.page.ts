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


    // DO
    var A_DO = document.getElementsByName("A-DO");
    var i = A_DO.length;
    while (i--) {
      A_DO[i].setAttribute("style", "color: red");
    }
    var B_DO = document.getElementsByName("B-DO");
    var i = B_DO.length;
    while (i--) {
      B_DO[i].setAttribute("style", "color: red");
    }
    var C_DO = document.getElementsByName("C-DO");
    var i = C_DO.length;
    while (i--) {
      C_DO[i].setAttribute("style", "color: red");
    }
    var D_DO = document.getElementsByName("D-DO");
    var i = D_DO.length;
    while (i--) {
      D_DO[i].setAttribute("style", "color: red");
    }
    var E_DO = document.getElementsByName("E-DO");
    var i = E_DO.length;
    while (i--) {
      E_DO[i].setAttribute("style", "color: red");
    }
    var F_DO = document.getElementsByName("F-DO");
    var i = F_DO.length;
    while (i--) {
      F_DO[i].setAttribute("style", "color: red");
    }
    var G_DO = document.getElementsByName("G-DO");
    var i = G_DO.length;
    while (i--) {
      G_DO[i].setAttribute("style", "color: red");
    }


    // RE
    var A_RE = document.getElementsByName("A-RE");
    var i = A_RE.length;
    while (i--) {
      A_RE[i].setAttribute("style", "color: red");
    }
    var B_RE = document.getElementsByName("B-RE");
    var i = B_RE.length;
    while (i--) {
      B_RE[i].setAttribute("style", "color: red");
    }
    var Cs_RE = document.getElementsByName("C#-RE");
    var i = Cs_RE.length;
    while (i--) {
      Cs_RE[i].setAttribute("style", "color: red");
    }
    var D_RE = document.getElementsByName("D-RE");
    var i = D_RE.length;
    while (i--) {
      D_RE[i].setAttribute("style", "color: red");
    }
    var E_RE = document.getElementsByName("E-RE");
    var i = E_RE.length;
    while (i--) {
      E_RE[i].setAttribute("style", "color: red");
    }
    var Fs_RE = document.getElementsByName("F#-RE");
    var i = Fs_RE.length;
    while (i--) {
      Fs_RE[i].setAttribute("style", "color: red");
    }
    var G_RE = document.getElementsByName("G-RE");
    var i = G_RE.length;
    while (i--) {
      G_RE[i].setAttribute("style", "color: red");
    }

    // MI
    var A_MI = document.getElementsByName("A-MI");
    var i = A_MI.length;
    while (i--) {
      A_MI[i].setAttribute("style", "color: red");
    }
    var B_MI = document.getElementsByName("B-MI");
    var i = B_MI.length;
    while (i--) {
      B_MI[i].setAttribute("style", "color: red");
    }
    var Cs_MI = document.getElementsByName("C#-MI");
    var i = Cs_MI.length;
    while (i--) {
      Cs_MI[i].setAttribute("style", "color: red");
    }
    var Ds_MI = document.getElementsByName("D#-MI");
    var i = Ds_MI.length;
    while (i--) {
      Ds_MI[i].setAttribute("style", "color: red");
    }
    var E_MI = document.getElementsByName("E-MI");
    var i = E_MI.length;
    while (i--) {
      E_MI[i].setAttribute("style", "color: red");
    }
    var Fs_MI = document.getElementsByName("F#-MI");
    var i = Fs_MI.length;
    while (i--) {
      Fs_MI[i].setAttribute("style", "color: red");
    }
    var Gs_MI = document.getElementsByName("G#-MI");
    var i = Gs_MI.length;
    while (i--) {
      Gs_MI[i].setAttribute("style", "color: red");
    }

    // FA
    var As_FA = document.getElementsByName("A#-FA");
    var i = As_FA.length;
    while (i--) {
      As_FA[i].setAttribute("style", "color: red");
    }
    var B_FA = document.getElementsByName("B-FA");
    var i = B_FA.length;
    while (i--) {
      B_FA[i].setAttribute("style", "color: red");
    }
    var C_FA = document.getElementsByName("C-FA");
    var i = C_FA.length;
    while (i--) {
      C_FA[i].setAttribute("style", "color: red");
    }
    var D_FA = document.getElementsByName("D-FA");
    var i = D_FA.length;
    while (i--) {
      D_FA[i].setAttribute("style", "color: red");
    }
    var E_FA = document.getElementsByName("E-FA");
    var i = E_FA.length;
    while (i--) {
      E_FA[i].setAttribute("style", "color: red");
    }
    var F_FA = document.getElementsByName("F-FA");
    var i = F_FA.length;
    while (i--) {
      F_FA[i].setAttribute("style", "color: red");
    }
    var G_FA = document.getElementsByName("G-FA");
    var i = G_FA.length;
    while (i--) {
      G_FA[i].setAttribute("style", "color: red");
    }


    // SOL
    var A_SOL = document.getElementsByName("A-SOL");
    var i = A_SOL.length;
    while (i--) {
      A_SOL[i].setAttribute("style", "color: red");
    }
    var B_SOL = document.getElementsByName("B-SOL");
    var i = B_SOL.length;
    while (i--) {
      B_SOL[i].setAttribute("style", "color: red");
    }
    var C_SOL = document.getElementsByName("C-SOL");
    var i = C_SOL.length;
    while (i--) {
      C_SOL[i].setAttribute("style", "color: red");
    }
    var D_SOL = document.getElementsByName("D-SOL");
    var i = D_SOL.length;
    while (i--) {
      D_SOL[i].setAttribute("style", "color: red");
    }
    var E_SOL = document.getElementsByName("E-SOL");
    var i = E_SOL.length;
    while (i--) {
      E_SOL[i].setAttribute("style", "color: red");
    }
    var Fs_SOL = document.getElementsByName("F#-SOL");
    var i = Fs_SOL.length;
    while (i--) {
      Fs_SOL[i].setAttribute("style", "color: red");
    }
    var G_SOL = document.getElementsByName("G-SOL");
    var i = G_SOL.length;
    while (i--) {
      G_SOL[i].setAttribute("style", "color: red");
    }


    // LA
    var A_LA = document.getElementsByName("A-LA");
    var i = A_LA.length;
    while (i--) {
      A_LA[i].setAttribute("style", "color: red");
    }
    var B_LA = document.getElementsByName("B-LA");
    var i = B_LA.length;
    while (i--) {
      B_LA[i].setAttribute("style", "color: red");
    }
    var Cs_LA = document.getElementsByName("C#-LA");
    var i = Cs_LA.length;
    while (i--) {
      Cs_LA[i].setAttribute("style", "color: red");
    }
    var D_LA = document.getElementsByName("D-LA");
    var i = D_LA.length;
    while (i--) {
      D_LA[i].setAttribute("style", "color: red");
    }
    var E_LA = document.getElementsByName("E-LA");
    var i = E_LA.length;
    while (i--) {
      E_LA[i].setAttribute("style", "color: red");
    }
    var Fs_LA = document.getElementsByName("F#-LA");
    var i = Fs_LA.length;
    while (i--) {
      Fs_LA[i].setAttribute("style", "color: red");
    }
    var Gs_LA = document.getElementsByName("G#-LA");
    var i = Gs_LA.length;
    while (i--) {
      Gs_LA[i].setAttribute("style", "color: red");
    }

    // SI
    var As_SI = document.getElementsByName("A#-SI");
    var i = As_SI.length;
    while (i--) {
      As_SI[i].setAttribute("style", "color: red");
    }
    var B_SI = document.getElementsByName("B-SI");
    var i = B_SI.length;
    while (i--) {
      B_SI[i].setAttribute("style", "color: red");
    }
    var Cs_SI = document.getElementsByName("C#-SI");
    var i = Cs_SI.length;
    while (i--) {
      Cs_SI[i].setAttribute("style", "color: red");
    }
    var Ds_SI = document.getElementsByName("D#-SI");
    var i = Ds_SI.length;
    while (i--) {
      Ds_SI[i].setAttribute("style", "color: red");
    }
    var E_SI = document.getElementsByName("E-SI");
    var i = E_SI.length;
    while (i--) {
      E_SI[i].setAttribute("style", "color: red");
    }
    var Fs_SI = document.getElementsByName("F#-SI");
    var i = Fs_SI.length;
    while (i--) {
      Fs_SI[i].setAttribute("style", "color: red");
    }
    var Gs_SI = document.getElementsByName("G#-SI");
    var i = Gs_SI.length;
    while (i--) {
      Gs_SI[i].setAttribute("style", "color: red");
    }

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

import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { HttpService } from '../services/httpService.service';
import { timeout } from 'q';

@Component({
  selector: 'app-select-escala',
  templateUrl: './select-escala.page.html',
  styleUrls: ['./select-escala.page.scss'],
})
export class SelectEscalaPage implements OnInit{

  constructor(public navCtrl: NavController, public platform: Platform, private nativeAudio: NativeAudio, private httpSrv: HttpService) { 
    this.nativeAudio.preloadSimple('A_1', 'assets/audio/A_1.mp3').then(
      (success) => {console.log('successA#1'); }, (error) => {console.log('errorA#1'); }
    );
    this.nativeAudio.preloadSimple('A_2', 'assets/audio/A_2.mp3').then(
      (success) => {console.log('successA#2'); }, (error) => {console.log('errorA#2'); }
    );
    this.nativeAudio.preloadSimple('A_3', 'assets/audio/A_3.mp3').then(
      (success) => {console.log('successA#3'); }, (error) => {console.log('errorA#3'); }
    );
    this.nativeAudio.preloadSimple('A_4', 'assets/audio/A_4.mp3').then(
      (success) => {console.log('successA#4'); }, (error) => {console.log('errorA#4'); }
    );
    this.nativeAudio.preloadSimple('A_5', 'assets/audio/A_5.mp3').then(
      (success) => {console.log('successA#5'); }, (error) => {console.log('errorA#5'); }
    );
    this.nativeAudio.preloadSimple('A1', 'assets/audio/A1.mp3').then(
      (success) => {console.log('successA1'); }, (error) => {console.log('errorA1'); }
    );
    this.nativeAudio.preloadSimple('A2', 'assets/audio/A2.mp3').then(
      (success) => {console.log('successA2'); }, (error) => {console.log('errorA2'); }
    );
    this.nativeAudio.preloadSimple('A3', 'assets/audio/A3.mp3').then(
      (success) => {console.log('successA3'); }, (error) => {console.log('errorA1'); }
    );
    this.nativeAudio.preloadSimple('A4', 'assets/audio/A4.mp3').then(
      (success) => {console.log('successA4'); }, (error) => {console.log('errorA4'); }
    );
    this.nativeAudio.preloadSimple('A5', 'assets/audio/A5.mp3').then(
      (success) => {console.log('successA5'); }, (error) => {console.log('errorA5'); }
    );
    this.nativeAudio.preloadSimple('B1', 'assets/audio/B1.mp3').then(
      (success) => {console.log('successB1'); }, (error) => {console.log('errorB1'); }
    );
    this.nativeAudio.preloadSimple('B2', 'assets/audio/B2.mp3').then(
      (success) => {console.log('successB2'); }, (error) => {console.log('errorB2'); }
    );
    this.nativeAudio.preloadSimple('B3', 'assets/audio/B3.mp3').then(
      (success) => {console.log('successB3'); }, (error) => {console.log('errorB3'); }
    );
    this.nativeAudio.preloadSimple('B4', 'assets/audio/B4.mp3').then(
      (success) => {console.log('successB4'); }, (error) => {console.log('errorB4'); }
    );
    this.nativeAudio.preloadSimple('B5', 'assets/audio/B5.mp3').then(
      (success) => {console.log('successB5'); }, (error) => {console.log('errorB5'); }
    );
    this.nativeAudio.preloadSimple('C_1', 'assets/audio/C_1.mp3').then(
      (success) => {console.log('successC#1'); }, (error) => {console.log('errorC#1'); }
    );
    this.nativeAudio.preloadSimple('C_2', 'assets/audio/C_2.mp3').then(
      (success) => {console.log('successC#2'); }, (error) => {console.log('errorC#2'); }
    );
    this.nativeAudio.preloadSimple('C_3', 'assets/audio/C_3.mp3').then(
      (success) => {console.log('successC#3'); }, (error) => {console.log('errorC#3'); }
    );
    this.nativeAudio.preloadSimple('C_4', 'assets/audio/C_4.mp3').then(
      (success) => {console.log('successC#4'); }, (error) => {console.log('errorC#4'); }
    );
    this.nativeAudio.preloadSimple('C_5', 'assets/audio/C_5.mp3').then(
      (success) => {console.log('successC#5'); }, (error) => {console.log('errorC#5'); }
    );
    this.nativeAudio.preloadSimple('C1', 'assets/audio/C1.mp3').then(
      (success) => {console.log('successC1'); }, (error) => {console.log('errorC1'); }
    );
    this.nativeAudio.preloadSimple('C2', 'assets/audio/C2.mp3').then(
      (success) => {console.log('successC2'); }, (error) => {console.log('errorC2'); }
    );
    this.nativeAudio.preloadSimple('C3', 'assets/audio/C3.mp3').then(
      (success) => {console.log('successC3'); }, (error) => {console.log('errorC3'); }
    );
    this.nativeAudio.preloadSimple('C4', 'assets/audio/C4.mp3').then(
      (success) => {console.log('successC4'); }, (error) => {console.log('errorC4'); }
    );
    this.nativeAudio.preloadSimple('C5', 'assets/audio/C5.mp3').then(
      (success) => {console.log('successC5'); }, (error) => {console.log('errorC5'); }
    );
    this.nativeAudio.preloadSimple('D_1', 'assets/audio/D_1.mp3').then(
      (success) => {console.log('successD#1'); }, (error) => {console.log('errorD#1'); }
    );
    this.nativeAudio.preloadSimple('D_2', 'assets/audio/D_2.mp3').then(
      (success) => {console.log('successD#2'); }, (error) => {console.log('errorD#2'); }
    );
    this.nativeAudio.preloadSimple('D_3', 'assets/audio/D_3.mp3').then(
      (success) => {console.log('successD#3'); }, (error) => {console.log('errorD#3'); }
    );
    this.nativeAudio.preloadSimple('D_4', 'assets/audio/D_4.mp3').then(
      (success) => {console.log('successD#4'); }, (error) => {console.log('errorD#4'); }
    );
    this.nativeAudio.preloadSimple('D_5', 'assets/audio/D_5.mp3').then(
      (success) => {console.log('successD#5'); }, (error) => {console.log('errorD#5'); }
    );
    this.nativeAudio.preloadSimple('D1', 'assets/audio/D1.mp3').then(
      (success) => {console.log('successD1'); }, (error) => {console.log('errorD1'); }
    );
    this.nativeAudio.preloadSimple('D2', 'assets/audio/D2.mp3').then(
      (success) => {console.log('successD2'); }, (error) => {console.log('errorD2'); }
    );
    this.nativeAudio.preloadSimple('D3', 'assets/audio/D3.mp3').then(
      (success) => {console.log('successD3'); }, (error) => {console.log('errorD3'); }
    );
    this.nativeAudio.preloadSimple('D4', 'assets/audio/D4.mp3').then(
      (success) => {console.log('successD4'); }, (error) => {console.log('errorD4'); }
    );
    this.nativeAudio.preloadSimple('D5', 'assets/audio/D5.mp3').then(
      (success) => {console.log('successD5'); }, (error) => {console.log('errorD5'); }
    );
    this.nativeAudio.preloadSimple('E1', 'assets/audio/E1.mp3').then(
      (success) => {console.log('successE1'); }, (error) => {console.log('errorE1'); }
    );
    this.nativeAudio.preloadSimple('E2', 'assets/audio/E2.mp3').then(
      (success) => {console.log('successE2'); }, (error) => {console.log('errorE2'); }
    );
    this.nativeAudio.preloadSimple('E3', 'assets/audio/E3.mp3').then(
      (success) => {console.log('successE3'); }, (error) => {console.log('errorE3'); }
    );
    this.nativeAudio.preloadSimple('E4', 'assets/audio/E4.mp3').then(
      (success) => {console.log('successE4'); }, (error) => {console.log('errorE4'); }
    );
    this.nativeAudio.preloadSimple('E5', 'assets/audio/E5.mp3').then(
      (success) => {console.log('successE5'); }, (error) => {console.log('errorE5'); }
    );
    this.nativeAudio.preloadSimple('E6', 'assets/audio/E6.mp3').then(
      (success) => {console.log('successE6'); }, (error) => {console.log('errorE6'); }
    );
    this.nativeAudio.preloadSimple('F_1', 'assets/audio/F_1.mp3').then(
      (success) => {console.log('successF#1'); }, (error) => {console.log('errorF#1'); }
    );
    this.nativeAudio.preloadSimple('F_2', 'assets/audio/F_2.mp3').then(
      (success) => {console.log('successF#2'); }, (error) => {console.log('errorF#2'); }
    );
    this.nativeAudio.preloadSimple('F_3', 'assets/audio/F_3.mp3').then(
      (success) => {console.log('successF#3'); }, (error) => {console.log('errorF#3'); }
    );
    this.nativeAudio.preloadSimple('F_4', 'assets/audio/F_4.mp3').then(
      (success) => {console.log('successF#4'); }, (error) => {console.log('errorF#4'); }
    );
    this.nativeAudio.preloadSimple('F_5', 'assets/audio/F_5.mp3').then(
      (success) => {console.log('successF#5'); }, (error) => {console.log('errorF#5'); }
    );
    this.nativeAudio.preloadSimple('F1', 'assets/audio/F1.mp3').then(
      (success) => {console.log('successF1'); }, (error) => {console.log('errorF1'); }
    );
    this.nativeAudio.preloadSimple('F2', 'assets/audio/F2.mp3').then(
      (success) => {console.log('successF2'); }, (error) => {console.log('errorF2'); }
    );
    this.nativeAudio.preloadSimple('F3', 'assets/audio/F3.mp3').then(
      (success) => {console.log('successF3'); }, (error) => {console.log('errorF3'); }
    );
    this.nativeAudio.preloadSimple('F4', 'assets/audio/F4.mp3').then(
      (success) => {console.log('successF4'); }, (error) => {console.log('errorF4'); }
    );
    this.nativeAudio.preloadSimple('F5', 'assets/audio/F5.mp3').then(
      (success) => {console.log('successF5'); }, (error) => {console.log('errorF5'); }
    );
    this.nativeAudio.preloadSimple('G_1', 'assets/audio/G_1.mp3').then(
      (success) => {console.log('successG#1'); }, (error) => {console.log('errorG#1'); }
    );
    this.nativeAudio.preloadSimple('G_2', 'assets/audio/G_2.mp3').then(
      (success) => {console.log('successG#2'); }, (error) => {console.log('errorG#2'); }
    );
    this.nativeAudio.preloadSimple('G_3', 'assets/audio/G_3.mp3').then(
      (success) => {console.log('successF#3'); }, (error) => {console.log('errorF#3'); }
    );
    this.nativeAudio.preloadSimple('G_4', 'assets/audio/G_4.mp3').then(
      (success) => {console.log('successG#4'); }, (error) => {console.log('errorG#4'); }
    );
    this.nativeAudio.preloadSimple('G_5', 'assets/audio/G_5.mp3').then(
      (success) => {console.log('successG#5'); }, (error) => {console.log('errorG#5'); }
    );
    this.nativeAudio.preloadSimple('G1', 'assets/audio/G1.mp3').then(
      (success) => {console.log('successG1'); }, (error) => {console.log('errorG1'); }
    );
    this.nativeAudio.preloadSimple('G2', 'assets/audio/G2.mp3').then(
      (success) => {console.log('successG2'); }, (error) => {console.log('errorG2'); }
    );
    this.nativeAudio.preloadSimple('G3', 'assets/audio/G3.mp3').then(
      (success) => {console.log('successG3'); }, (error) => {console.log('errorG3'); }
    );
    this.nativeAudio.preloadSimple('G4', 'assets/audio/G4.mp3').then(
      (success) => {console.log('successG4'); }, (error) => {console.log('errorG4'); }
    );
    this.nativeAudio.preloadSimple('G5', 'assets/audio/G5.mp3').then(
      (success) => {console.log('successG5'); }, (error) => {console.log('errorG5'); }
    );
  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i=0; i<1e7;i++){
      if((new Date().getTime()- start)>milliseconds){
        break;
      }
    }
  }
  EscalaA(){
    this.nativeAudio.play('A').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('B').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('C_').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('D').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('E').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('F_').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('G_').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('A').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  } 
  EscalaB(){
    this.nativeAudio.play('B').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('C_').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('D_').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('E').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('F_').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('G_').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('A_').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('B').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  } 
  EscalaC(){
    this.nativeAudio.play('C').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('D').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('E').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('F').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('G').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('A').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('B').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('C').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  } 
  EscalaD(){
    this.nativeAudio.play('D').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('E').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('F_').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('G').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('A').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('B').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('C_').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('D').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }
  EscalaE(){
    this.nativeAudio.play('E').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('F_').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('G_').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('A').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('B').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('C_').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('D_').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('E').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  } 
  EscalaF(){
    this.nativeAudio.play('F').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('G').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('A').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('A_').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('C').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('D').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('E').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('F').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('F').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  } 
  EscalaG(){
    this.nativeAudio.play('G').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('A').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('B').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('C').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('D').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('E').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('F_').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.sleep(500);
    this.nativeAudio.play('G').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
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

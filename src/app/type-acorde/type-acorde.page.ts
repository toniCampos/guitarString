import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type-acorde',
  templateUrl: './type-acorde.page.html',
  styleUrls: ['./type-acorde.page.scss'],
})

export class TypeAcordePage {
  
  constructor(public navCtrl: NavController, public platform: Platform, private nativeAudio: NativeAudio, public activeRouter: ActivatedRoute) {
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

  

  A() {
    this.nativeAudio.play('A1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('E2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('A2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('C_2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('E5').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }

  Am() {
    this.nativeAudio.play('A1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('E2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('A2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('C2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('E5').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }

  A7() {
    this.nativeAudio.play('A1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('E2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('G2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('C_2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('E5').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }

  B() {
    this.nativeAudio.play('B1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('F_2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('B2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('D_2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('F3').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }
  
  Bm() {
    this.nativeAudio.play('B1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('F_2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('B2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('D2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('F_3').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }

  B7() {
    this.nativeAudio.play('B1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('F_2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('B2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('A2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('F_3').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }

  C() {
    this.nativeAudio.play('C1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('E2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('G2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('C4').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('E5').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }

  Cm() {
    this.nativeAudio.play('C1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('G2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('C4').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('E5').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('G3').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }

  C7() {
    this.nativeAudio.play('C1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('E2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('A_2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('C4').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }

  D() {
    this.nativeAudio.play('D1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('A2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('D2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('F_3').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }

  Dm() {
    this.nativeAudio.play('D1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('A2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('D2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('F3').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }

  D7() {
    this.nativeAudio.play('D1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('A2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('C2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('F_3').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }

  E() {
    this.nativeAudio.play('E1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('B1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('E2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('G_2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('B2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('E5').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }

  Em() {
    this.nativeAudio.play('E1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('B1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('E2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('G2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('B2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('E5').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }

  E7() {
    this.nativeAudio.play('E1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('B1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('D1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('G_2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('B2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('E5').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }

  F() {
    this.nativeAudio.play('F1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('C1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('F2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('A2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('C4').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('F3').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }

  Fm() {
    this.nativeAudio.play('F1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('C1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('F2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('B2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('C4').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('F3').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }

  F7() {
    this.nativeAudio.play('F1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('C1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('D_1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('A2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('C4').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('F3').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }

  G() {
    this.nativeAudio.play('G1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('B1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('D1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('G2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('B2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('G3').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }

  Gm() {
    this.nativeAudio.play('G1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('A_1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('D1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('G2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('D2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('G3').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }

  G7() {
    this.nativeAudio.play('G1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('B1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('D1').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('G2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('B2').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
    this.nativeAudio.play('F3').then(
      (success) => { console.log('success playing'); }, (error) => { console.log('error'); }
    );
  }


  

  ngOnInit() {
    let notaSeleccionada = this.activeRouter.snapshot.paramMap.get('notaRaiz');
    console.log(notaSeleccionada);
  }
}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-select-escala',
  templateUrl: './select-escala.page.html',
  styleUrls: ['./select-escala.page.scss'],
})
export class SelectEscalaPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  Fretboard() {
    this.navCtrl.navigateForward("/fretboard");
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/httpService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-nota',
  templateUrl: './select-nota.page.html',
  styleUrls: ['./select-nota.page.scss'],
})


export class SelectNotaPage implements OnInit {

  acordes: any;

  A: any;
  Am: any;
  A7: any;
  B: any;
  Bm: any;
  B7: any;
  C: any;
  Cm: any;
  C7: any;
  D: any;
  Dm: any;
  D7: any;
  E: any;
  Em: any;
  E7: any;
  F: any;
  Fm: any;
  F7: any;
  G: any;
  Gm: any;
  G7: any;

  constructor(private httpSrv: HttpService, public router: Router) { }

  clickNota(nombreNota) {
    console.log('Presionó: ' + nombreNota);
    console.log(this.A);
    // this.router.navigate(['type-acorde', nombreNota]);
  }

  ngOnInit() {

    this.httpSrv.getChords()
    .subscribe(res => {
      this.acordes = res;
      console.log(this.acordes);


      this.A = this.acordes.A;
      this.Am = this.acordes.Am;
      this.A7 = this.acordes.A7;

      this.B = this.acordes.B;
      this.Bm = this.acordes.Bm;
      this.B7 = this.acordes.B7;

      this.C = this.acordes.C;
      this.Cm = this.acordes.Cm;
      this.C7 = this.acordes.C7;

      this.D = this.acordes.D;
      this.Dm = this.acordes.Dm;
      this.D7 = this.acordes.D7;

      this.E = this.acordes.E;
      this.Em = this.acordes.Em;
      this.E7 = this.acordes.E7;

      this.F = this.acordes.F;
      this.Fm = this.acordes.Fm;
      this.F7 = this.acordes.F7;

      this.G = this.acordes.G;
      this.Gm = this.acordes.Gm;
      this.G7 = this.acordes.G7;

    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/httpService.service';

@Component({
  selector: 'app-select-nota',
  templateUrl: './select-nota.page.html',
  styleUrls: ['./select-nota.page.scss'],
})


export class SelectNotaPage implements OnInit {

  constructor(private httpSrv: HttpService) { }

  acordes = {};

  ngOnInit() {
    this.httpSrv.getChords()
    .subscribe(res => {
      this.acordes = res;
      console.log(this.acordes);


      const A = this.acordes.A;
      const Am = this.acordes.Am;
      const A7 = this.acordes.A7;

      const B = this.acordes.B;
      const Bm = this.acordes.Bm;
      const B7 = this.acordes.B7;
      
      const C = this.acordes.C;
      const Cm = this.acordes.Cm;
      const C7 = this.acordes.C7;

      const D = this.acordes.D;
      const Dm = this.acordes.Dm;
      const D7 = this.acordes.D7;

      const E = this.acordes.E;
      const Em = this.acordes.Em;
      const E7 = this.acordes.E7;

      const F = this.acordes.F;
      const Fm = this.acordes.Fm;
      const F7 = this.acordes.F7;

      const G = this.acordes.G;
      const Gm = this.acordes.Gm;
      const G7 = this.acordes.G7;
    });
  }

}

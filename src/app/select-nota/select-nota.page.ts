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
    });
  }

}

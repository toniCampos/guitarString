import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }
  localPathAcordes = 'http://localhost:3000/chords';
  localPathEscalas = 'http://localhost:3000/scales';

  serverAcordes = 'https://guitar-strings-server.herokuapp.com/chords';
  serverEscalas = 'https://guitar-strings-server.herokuapp.com/scales';

  getChords() {
      console.log('desde el servidor');
      return this.http.get(this.serverAcordes);
      // console.log('local');
      // return this.http.get(this.localPathAcordes);
  }

  getScales() {
    console.log('desde el servidor');
    return this.http.get(this.serverEscalas);
    // console.log('local');
    // return this.http.get(this.localPathEscalas);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }
    localPathAcordes = 'http://localhost:3000/chords';

    getChords() {
        console.log('desde el servicio');
        return this.http.get(this.localPathAcordes);
    }

}

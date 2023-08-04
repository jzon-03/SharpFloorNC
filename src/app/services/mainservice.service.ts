import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  constructor(
    private _http: HttpClient
  ) { }

  sendEmail(body: any){
    return this._http.post("https://emailapi20230803142600.azurewebsites.net/api/email", body);
  }
}

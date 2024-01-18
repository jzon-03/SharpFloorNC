import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  env = environment;
  constructor(
    private _http: HttpClient
  ) { }

  sendEmail(body: any){
    // return this._http.post("https://localhost:7213/api/email", body);
    return this._http.post(this.env.domainUrl + "send_email.php", body);
  }
}

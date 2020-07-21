import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebrequestService {

    readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'https://api.wallets.africa';
   }

  post (uri: string, payload:Object){
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
}


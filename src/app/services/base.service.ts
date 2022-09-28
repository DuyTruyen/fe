import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private httpClient:HttpClient) { }

  get(){
    return this.httpClient.get(`${environment.baseUrl}`)
  }
}

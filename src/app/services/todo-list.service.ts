import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  url=environment.baseUrl;
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<any>{
    return this.httpClient.get(this.url+'api/ToDoTask')
  }
  add(payload:any):Observable<any>{
    return this.httpClient.post(this.url+'api/ToDoTask',payload)
  }
  get(id:any):Observable<any>{
    return this.httpClient.get(this.url+'api/ToDoTask' + '/' + id)
  }
  update(id:any,payload:any):Observable<any>{
    return this.httpClient.put(this.url+'api/ToDoTask'+'/' +id ,payload)
  }
  delete(){}
}

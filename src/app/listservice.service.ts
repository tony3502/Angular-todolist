import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note';


@Injectable({
  providedIn: 'root'
})
export class ListserviceService {

  constructor(private httpclient:HttpClient) { }

  getObs():Observable<any>{
    const notels = this.httpclient.get<any>("http://localhost:3000/post/1");
    return notels;
  }

  postData(note:Note[]):void{
    const httpOptions = {
      headers:{ 'Content-Type': 'application/json' }
    };
    const body:any=JSON.stringify({note});
    console.log(body);
    this.httpclient.put("http://localhost:3000/post/1",body,httpOptions).subscribe();
  }
}

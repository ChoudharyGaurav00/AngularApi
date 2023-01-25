import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { postIf } from './apiPostInf';
import {Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(public http:HttpClient) {

   }
   private urlsend:string='https://angularapi-82386-default-rtdb.firebaseio.com/newdata.json';
   getApiData(url:string):Observable<postIf[]>{
          return this.http.get<postIf[]>(url)
   }
   saveAPIData(data :any){
      console.log("logging sending data");
      console.log(data);
     this.http.post(this.urlsend,data)
     .subscribe((res)=>{
      console.log("logging response");
      console.log(res);
     });
   }

}

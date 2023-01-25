import { Component } from '@angular/core';
import { objInf } from '../apiObjectInf';
import { HttpClient } from '@angular/common/http';
import { postIf } from '../apiPostInf';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
constructor(public http: HttpClient){}


public updateUrl:string='https://angularapi-82386-default-rtdb.firebaseio.com/newdata/';




updateItem(key:string,value:postIf){
  console.log("in update item");
  console.log(key);
  console.log(value);
  console.log(this.updateUrl+key+'.json');
  this.http.put(this.updateUrl+key+'.json',value)
  .subscribe();
}

public temp: postIf={} as postIf;
public key : string='';
getUserFormData(datacur:objInf){
  
  console.log(datacur);
  this.temp.Body=datacur.Body;
  this.temp.I=datacur.I;
  this.temp.title=datacur.title;
  this.temp.userId=datacur.userId;
  this.key=datacur.id;
 
  this.updateItem(this.key,this.temp)

}

}

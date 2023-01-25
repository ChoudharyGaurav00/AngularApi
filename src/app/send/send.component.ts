import { Component } from '@angular/core';
import {OnInit} from '@angular/core'
import { ApidataService } from '../apidata.service';
import { postIf } from '../apiPostInf';
import { map } from 'rxjs/operators'
import { objInf } from '../apiObjectInf';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit{
  public result:postIf={} as postIf;
  public url:string='https://angularapi-82386-default-rtdb.firebaseio.com/newdata.json';
  public firebaseData:postIf[]=[];
  constructor(public apidataservice :ApidataService){}
  ngOnInit(): void {}
  

  getUserFormData(datacur:postIf){
     
      console.log(datacur);
      this.apidataservice.saveAPIData(datacur);
}
public tempdata:postIf[]=[];
public tempres:Object={};
public tempobjinf:objInf={} as objInf;
public firebaseDataObj:Object[]=[];
  getDataFromFirebase(){
    this.apidataservice.getApiData(this.url)

    .pipe(map((res)=>{
         console.log("pipe array");

      for(const key in res) 
      {
      this.tempres=   (({...res[key]}));
        // console.log(this.tempres);
        
        this.firebaseData.push(<postIf>this.tempres);
        this.tempobjinf =({...res[key],id:key});
        this.firebaseDataObj.push(<objInf>this.tempobjinf);
      
      
      }
      console.log("firebasedata");
      console.log(this.firebaseData);
      console.log("firebasedataObject");
      console.log(this.firebaseDataObj);
      console.log("pipe array ended");
    }))
    .subscribe((res)=>{
      console.log((res));
      
    });
   
  }
}
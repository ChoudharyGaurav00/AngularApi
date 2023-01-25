import { Component } from '@angular/core';
import {OnInit} from '@angular/core'
import { ApidataService } from '../apidata.service';
import { postIf } from '../apiPostInf';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{

public dataRec:postIf[]=[];

constructor(public apiservice:ApidataService){}
private url:string='https://jsonplaceholder.typicode.com/posts';

ngOnInit(): void {
  // this.apiservice.getApiData()
  //   .subscribe(data=>this.dataRec=data);
}
hitAPI(){
  this.apiservice.getApiData(this.url)
   .subscribe(data=>this.dataRec=data);

}
clearAPI(){
  this.dataRec=[];
}

}

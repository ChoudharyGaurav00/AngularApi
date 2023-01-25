import { Component } from '@angular/core';
import { objInf } from '../apiObjectInf';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
constructor(public http: HttpClient){}


public deleteUrl:string='https://angularapi-82386-default-rtdb.firebaseio.com/newdata/';




deleteItem(key:string){
  console.log(key);
  console.log(this.deleteUrl+key+'.json');
  this.http.delete(this.deleteUrl+key+'.json')
  .subscribe();
}

}

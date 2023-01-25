import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { HttpClientModule} from '@angular/common/http'
import { ApidataService } from './apidata.service';
import { SendComponent } from './send/send.component';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    SendComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApidataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

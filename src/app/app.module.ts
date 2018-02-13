import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StatComponent } from './stat/stat.component';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    StatComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

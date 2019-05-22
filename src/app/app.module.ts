import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NaukaComponent } from './nauka/nauka.component';
import {HttpClientModule} from '@angular/common/http';
import {BooksService} from './books.service';


@NgModule({
  declarations: [
    AppComponent,
    NaukaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

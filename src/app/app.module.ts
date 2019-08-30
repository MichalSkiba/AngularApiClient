import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NaukaComponent } from './nauka/nauka.component';
import {HttpClientModule} from '@angular/common/http';
import {BooksService} from './books.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NaukaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule, Ng2SearchPipeModule, FormsModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

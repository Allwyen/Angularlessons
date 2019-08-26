import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NavbarComponent,AppComponent,ContactusComponent]
})
export class AppModule { }

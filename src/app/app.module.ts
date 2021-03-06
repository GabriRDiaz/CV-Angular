import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechListComponent } from './components/techs-list.component';
import { TechComponent } from './components/tech/tech.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { ContactListComponent } from './components/contact-list/contact-list.component'

@NgModule({
  declarations: [
    AppComponent,
    TechListComponent,
    TechComponent,
    ContactComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

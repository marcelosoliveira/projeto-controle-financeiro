import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AddNameComponent } from './components/add-name/add-name.component';
import { FormsModule } from '@angular/forms';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { PersonFormComponent } from './components/person-form/person-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    WelcomeComponent,
    AddNameComponent,
    PersonCardComponent,
    PersonFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

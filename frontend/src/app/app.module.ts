import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddNameComponent } from './add-name/add-name.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    WelcomeComponent,
    AddNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

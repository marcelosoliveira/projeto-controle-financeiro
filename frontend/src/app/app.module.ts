import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table'
import { TooltipModule } from 'primeng/tooltip'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components-learn/hello/hello.component';
import { WelcomeComponent } from './components-learn/welcome/welcome.component';
import { AddNameComponent } from './components-learn/add-name/add-name.component';
import { PersonCardComponent } from './components-learn/person-card/person-card.component';
import { PersonFormComponent } from './components-learn/person-form/person-form.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    WelcomeComponent,
    AddNameComponent,
    PersonCardComponent,
    PersonFormComponent,
    LancamentosPesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

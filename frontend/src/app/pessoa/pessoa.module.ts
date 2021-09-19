import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { MessageModule } from '../message/message.module';
import { AppRoutingModule } from '../app-routing.module';

import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';


@NgModule({
  declarations: [
    PessoasPesquisaComponent,
    PessoaCadastroComponent,
    PessoasGridComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MessageModule,
    InputTextModule,
    ButtonModule,
    SelectButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputNumberModule,
    InputMaskModule,
    RouterModule.forChild([
      {
        path: 'pessoas', component: PessoasPesquisaComponent,
      },
      {
        path: 'pessoas/novo', component: PessoaCadastroComponent,
      },
    ])
  ],
  exports: [
    PessoasPesquisaComponent,
    PessoaCadastroComponent,
    InputTextModule,
    ButtonModule,
    SelectButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputNumberModule,
    InputMaskModule
  ]
})
export class PessoaModule { }

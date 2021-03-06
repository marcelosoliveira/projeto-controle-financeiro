import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { SharedModule } from '../shared/shared.module';

import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosGridComponent } from './lancamentos-grid/lancamentos-grid.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';


@NgModule({
  declarations: [
    LancamentosPesquisaComponent,
    LancamentoCadastroComponent,
    LancamentosGridComponent,
  ],
  imports: [
    FormsModule,
    SharedModule,
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
    RouterModule.forChild([
      {
        path: 'lancamentos', component: LancamentosPesquisaComponent,
      },
      {
        path: 'lancamentos/novo', component: LancamentoCadastroComponent,
      }
    ])
  ]
})
export class LancamentoModule { }

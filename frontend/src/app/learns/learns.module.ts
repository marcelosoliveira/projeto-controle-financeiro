import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TabViewModule } from 'primeng/tabview';

import {
  FuncionarioService,
} from './components-learn/funcionario-form/funcionario.service';
import {
  FuncionarioAbreviadoService
} from './components-learn/funcionario-form/funcionario-abreviado.service';
import { LogService } from './components-learn/funcionario-form/log.service';

import {
  CampoColoridoDirective
} from './components-learn/directive/campo-colorido.directive';

import { HelloComponent } from './components-learn/hello/hello.component';
import { WelcomeComponent } from './components-learn/welcome/welcome.component';
import { AddNameComponent } from './components-learn/add-name/add-name.component';
import { PersonCardComponent } from './components-learn/person-card/person-card.component';
import { PersonFormComponent } from './components-learn/person-form/person-form.component';
import { PipeLearnComponent } from './components-learn/pipe-learn/pipe-learn.component';
import { FormDrivenComponent } from './components-learn/form-driven/form-driven.component';
import { FuncionarioFormComponent } from './components-learn/funcionario-form/funcionario-form.component';
import { CidadesFormComponent } from './components-learn/cidades-form/cidades-form.component';


const criarFuncionarioService = () => {
  return new FuncionarioAbreviadoService(new LogService("LOG"), 5);
}

@NgModule({
  declarations: [
    HelloComponent,
    WelcomeComponent,
    AddNameComponent,
    PersonCardComponent,
    PersonFormComponent,
    CampoColoridoDirective,
    PipeLearnComponent,
    FormDrivenComponent,
    FuncionarioFormComponent,
    CidadesFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TabViewModule,
    HttpClientModule
  ],
  providers: [
    LogService,
    // { provide: FuncionarioService, useClass: FuncionarioAbreviadoService },
    // { provide: FuncionarioService, useFactory: criarFuncionarioService },
    { provide: 'LogService', useValue: 'LOG-2' }
  ],
  exports: [
    HelloComponent,
    WelcomeComponent,
    AddNameComponent,
    PersonCardComponent,
    PersonFormComponent,
    CampoColoridoDirective,
    PipeLearnComponent,
    FormDrivenComponent,
    FuncionarioFormComponent,
    CidadesFormComponent,
    TabViewModule
  ]
})
export class LearnsModule { }

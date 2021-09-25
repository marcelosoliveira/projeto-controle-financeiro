import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabViewModule } from 'primeng/tabview';

import { HelloComponent } from './components-learn/hello/hello.component';
import { WelcomeComponent } from './components-learn/welcome/welcome.component';
import { AddNameComponent } from './components-learn/add-name/add-name.component';
import { PersonCardComponent } from './components-learn/person-card/person-card.component';
import { PersonFormComponent } from './components-learn/person-form/person-form.component';
import { CampoColoridoDirective } from './components-learn/directive/campo-colorido.directive';
import { PipeLearnComponent } from './components-learn/pipe-learn/pipe-learn.component';
import { FormDrivenComponent } from './components-learn/form-driven/form-driven.component';
import { FuncionarioFormComponent } from './components-learn/funcionario-form/funcionario-form.component';


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
  ],
  imports: [
    CommonModule,
    FormsModule,
    TabViewModule
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
    TabViewModule
  ]
})
export class LearnsModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'lancamentos', pathMatch: 'full'
      },
      {
        path: '**', component: NotFoundComponent,
      }
    ])
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }

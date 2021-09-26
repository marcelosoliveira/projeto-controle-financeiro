import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './funcionario.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

  public persons: any = [];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.persons = this.funcionarioService.consultar();
  }

  addName(name: any): void {
    this.funcionarioService.addPerson(name);
  }

}

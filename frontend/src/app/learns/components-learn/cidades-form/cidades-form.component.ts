import { Component, OnInit } from '@angular/core';

import { CidadeService } from './cidade.service';

@Component({
  selector: 'app-cidades-form',
  templateUrl: './cidades-form.component.html',
  styleUrls: ['./cidades-form.component.css']
})
export class CidadesFormComponent implements OnInit {

  public cidades: any = [];

  constructor(private cidadeService: CidadeService) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar(): any {
    this.cidadeService.consultar().subscribe({
      next: cidades => this.cidades = cidades,
      error: ({ error }) => console.log(`${error}`),
    });
  }

  adicionar(name: string): void {
    this.cidadeService.adicionar(name).subscribe({
      next: cidade => {
        this.consultar();
        alert(`Cidade de ${cidade.name} adicionada!`);
      },
      error: ({ error }) => console.log(error),
    });
  }

  atualizar(id: number, name:string): void {
    this.cidadeService.atualizar(id, name).subscribe({
      next: () => {
        this.consultar();
        alert("Cidade atualizada!");
      },
      error: ({ error }) => console.log(error),
    })
  }

  excluir(id: number): void {
    this.cidadeService.excluir(id).subscribe({
      next: () => {
        this.consultar();
        alert("Cidade excluída!");
      },
      error: ({ error }) => console.log(error),
    })
  }

}

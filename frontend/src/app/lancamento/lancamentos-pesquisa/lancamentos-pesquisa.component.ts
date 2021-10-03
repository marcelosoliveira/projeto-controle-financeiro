import { Component, OnInit } from '@angular/core';
import { LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  public lancamentos: any = [];

  constructor(private lancamentoService: LancamentoService) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): any {
    this.lancamentoService.pesquisar().subscribe({
      next: ({ content }) => this.lancamentos = content,
      error: (error) => console.error(error),
    });
  }

}

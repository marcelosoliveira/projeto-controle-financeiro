import { Component, OnInit } from '@angular/core';
import { LancamentoFiltro, LancamentoService } from '../lancamento.service';


@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  public lancamentos: any = [];

  public filtro: LancamentoFiltro = {
    descricao: '',
    dataVencimentoDe: '',
    dataVencimentoAte: '',
  };

  constructor(private lancamentoService: LancamentoService) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): any {
    this.lancamentoService.pesquisar(this.filtro)
      .then((data) => this.lancamentos = data)
      .catch((error) => console.error(error.message));
  }

}

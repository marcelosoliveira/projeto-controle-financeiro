import { Component, OnInit } from '@angular/core';
import { LancamentoFiltro, LancamentoService } from '../lancamento.service';


@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  public lancamentos: any = [];

  public dataVencimentoDe: string = '';
  public dataVencimentoAte: string = '';
  public totalRegistros: number = 0;

  public filtro: LancamentoFiltro = new LancamentoFiltro();

  constructor(private lancamentoService: LancamentoService) { }

  ngOnInit(): void {
  }

  pesquisar(pagina: number): any {
    this.filtro.page = typeof pagina !== 'number' ? 0 : pagina;
    this.filtro.dataVencimentoDe = this.dataVencimentoDe;
    this.filtro.dataVencimentoAte = this.dataVencimentoAte;

    this.lancamentoService.pesquisar(this.filtro)
      .then((data) => {
        this.lancamentos = data.content;
        this.totalRegistros = data.totalElements;
      })
      .catch((error) => console.error(error.message));
  }

  delete(codigo: number): void {
    this.lancamentoService.delete(codigo)
      .then((data) => {
        !data ? alert("Lancamento excluído com sucesso!") : "";
        this.pesquisar(this.filtro.page);
      })
      .catch((error) => console.error(error.message));
  }
}

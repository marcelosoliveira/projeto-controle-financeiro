import { Component, OnInit } from '@angular/core';
import { PessoasFiltro, PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  public pessoas: any = []
  public filtro: PessoasFiltro = new PessoasFiltro();
  public totalRegistros: number = 0;

  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {
  }

  pesquisar(pagina: number): void {
    this.filtro.page = typeof pagina !== 'number' ? 0 : pagina;

    this.pessoasService.pesquisar(this.filtro)
      .then((data) => {
        this.pessoas = data.content;
        this.totalRegistros = data.totalElements;
      })
      .catch((error)=> console.log(error.message));
  }

  delete(codigo: number): void {
    this.pessoasService.delete(codigo)
      .then((data) => {
        !data ? alert("Pessoa excluído com sucesso!") : "";
        this.pesquisar(this.filtro.page);
      })
      .catch((error) => console.error(error.message));
  }

}

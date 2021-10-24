import { Component, OnInit } from '@angular/core';
import { PessoasService } from 'src/app/pessoa/pessoas.service';
import { Lancamento } from '../lancamento';
import { LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  public lancamento: Lancamento = new Lancamento();

  public tipos: object[] = [
    { label: "Receita", value: "RECEITA"},
    { label: "Despesa", value: "DESPESA"}
  ];

  public categorias: object[] = [];

  public pessoas: object[] = [];

  constructor(
    private lancamentoService: LancamentoService,
    private pessoaService: PessoasService,
  ) { };

  ngOnInit(): void {
    this.getCategorias();
    this.getPessoas();
  }

  getCategorias(): void {
    this.lancamentoService.categoria()
      .then((data) => this.categorias = data)
      .catch((error) => console.error(error.message));
  }

  getPessoas(): void {
    this.pessoaService.listarTodas()
      .then((data) => this.pessoas = data.filter((pessoa: any) => pessoa.ativo))
      .catch((error) => console.error(error.message));
  }

  salvar(): void {
    this.lancamentoService.salvar(this.lancamento)
      .then((data) => data ? alert(`Lançamento cadastrada com sucesso`) : "")
      .catch((error) => console.error(error.message));
  }

  novo(): void {
    this.lancamento = new Lancamento();
  }

}

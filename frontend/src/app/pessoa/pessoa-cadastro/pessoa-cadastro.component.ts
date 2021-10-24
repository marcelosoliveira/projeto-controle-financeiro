import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  public pessoa: Pessoa = new Pessoa();

  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {
  }

  salvar(): void {
    this.pessoasService.salvar(this.pessoa)
      .then((data) => data ? alert(`Pessoa cadastrada com sucesso`) : "")
      .catch((error) => console.error(error.message));
  }

  novo(): void {
    this.pessoa = new Pessoa();
  }

}

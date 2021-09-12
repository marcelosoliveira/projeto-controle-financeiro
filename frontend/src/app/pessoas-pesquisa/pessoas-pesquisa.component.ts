import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  public pessoas = [
    { nome: "Manoel Pinheiro", cidade: "Urbelândia", estado: "MG", status: "Ativo" },
    { nome: "Sebastião da SIlva", cidade: "São Paulo", estado: "SP", status: "Inativo" },
    { nome: "Carla Souza", cidade: "Florianópolis", estado: "SC", status: "Ativo" },
    { nome: "Luís Ferreira", cidade: "Curitiba", estado: "PR", status: "Ativo" },
    { nome: "Vilmar Andrade", cidade: "Rio de Janeiro", estado: "RJ", status: "Inativo" },
    { nome: "Joaquim de Oliveira", cidade: "Carangola", estado: "MG", status: "Inativo" },
    { nome: "Ana Márcia dos Santos", cidade: "Lindóia", estado: "SP", status: "Ativo" },
    { nome: "Marcelo dos Santos", cidade: "Lindóia", estado: "SP", status: "Ativo" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

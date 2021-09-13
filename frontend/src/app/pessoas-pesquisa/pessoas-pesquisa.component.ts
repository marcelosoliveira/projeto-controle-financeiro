import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  public pessoas = [
    { nome: "Manoel Pinheiro", cidade: "Urbelândia", estado: "MG", status: true },
    { nome: "Sebastião da SIlva", cidade: "São Paulo", estado: "SP", status: false },
    { nome: "Carla Souza", cidade: "Florianópolis", estado: "SC", status: true },
    { nome: "Luís Ferreira", cidade: "Curitiba", estado: "PR", status: true },
    { nome: "Vilmar Andrade", cidade: "Rio de Janeiro", estado: "RJ", status: false },
    { nome: "Joaquim de Oliveira", cidade: "Carangola", estado: "MG", status: false },
    { nome: "Ana Márcia dos Santos", cidade: "Lindóia", estado: "SP", status: true },
    { nome: "Marcelo dos Santos", cidade: "Lindóia", estado: "SP", status: true }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

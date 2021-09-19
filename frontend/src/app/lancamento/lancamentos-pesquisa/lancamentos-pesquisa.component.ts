import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  public lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2021, 6, 30),
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
    { tipo: 'RECEITA', descricao: 'Venda de Software', dataVencimento: new Date(2021, 6, 10),
      dataPagamento: new Date(2021, 6, 9), valor: 80000, pessoa: 'Atacado Brasil' },
    { tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: new Date(2021, 7, 20),
      dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda' },
    { tipo: 'DESPESA', descricao: 'Mensalidade Escola', dataVencimento: new Date(2021, 6, 5),
      dataPagamento: new Date(2021, 5, 30), valor: 800, pessoa: 'Escola Abelha Rainha' },
    { tipo: 'RECEITA', descricao: 'Venda de Carro', dataVencimento: new Date(2021, 6, 18),
      dataPagamento: null, valor: 55000, pessoa: 'Sebastião Souza' },
    { tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: new Date(2021, 6, 10),
      dataPagamento: new Date(2021, 6, 9), valor: 1750, pessoa: 'Casa Nova Imóveis' },
    { tipo: 'DESPESA', descricao: 'Mensalidade Musculação', dataVencimento: new Date(2021, 6, 13),
      dataPagamento: null, valor: 180, pessoa: 'Academia Top' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

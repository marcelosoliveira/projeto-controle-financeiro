import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app-algamoney.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Algamoney';

  public lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2021',
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
    { tipo: 'RECEITA', descricao: 'Venda de Software', dataVencimento: '10/06/2021',
      dataPagamento: '09/06/2021', valor: 80000, pessoa: 'Atacado Brasil' },
    { tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: '20/07/2021',
      dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda' },
    { tipo: 'DESPESA', descricao: 'Mensalidade Escola', dataVencimento: '05/06/2021',
      dataPagamento: '30/05/2021', valor: 800, pessoa: 'Escola Abelha Rainha' },
    { tipo: 'RECEITA', descricao: 'Venda de Carro', dataVencimento: '18/06/2021',
      dataPagamento: null, valor: 55000, pessoa: 'Sebastião Souza' },
    { tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: '10/06/2021',
      dataPagamento: '09/06/2021', valor: 1750, pessoa: 'Casa Nova Imóveis' },
    { tipo: 'DESPESA', descricao: 'Mensalidade Musculação', dataVencimento: '13/06/2021',
      dataPagamento: null, valor: 180, pessoa: 'Academia Top' }
  ];
}

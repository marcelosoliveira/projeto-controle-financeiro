export class Lancamento {
  descricao?: string;
  dataVencimento?: string;
  dataPagamento?: string;
  valor?: number;
  tipo?: string;
  observacao?: string;
  categoria: any = {
    codigo: 0,
  };
  pessoa: any = {
    codigo: 0,
  };
}

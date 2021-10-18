export class Pessoa {
  codigo?: number;
  nome?: string;
  ativo: boolean = false;
  endereco: any = {
      logradouro:"",
      numero: "",
      complemento: "",
      bairro: "",
      cep: "",
      cidade: "",
      estado: "",
  }
}

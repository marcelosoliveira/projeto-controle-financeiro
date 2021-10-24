import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { Lancamento } from './lancamento';

export class LancamentoFiltro {

  public descricao: string = '';
  public dataVencimentoDe: string = '';
  public dataVencimentoAte: string = '';
  public page: number = 0;
  public size: number = 3;

};

@Injectable({
  providedIn: 'root',
})
export class LancamentoService {

  private url: string = 'http://localhost:8080/api/v1/lancamentos';

  // private request: any = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'Authorization': 'Basic YW5ndWxhcjpAbmd1bEByMA==',
  //     'Accept': '*/*',
  //   }),
  // };

  private user: string = 'grant_type=password'
    + '&username=admin@algamoney.com'
    + '&password=admin';

  // private headers: HttpHeaders = new HttpHeaders({
  //   Authorization: `Bearer ${this.requestToken()}`,
  // });

  constructor(
    private httpClient: HttpClient,
  ) { };

  converterDate(filtro: LancamentoFiltro): LancamentoFiltro {
    filtro.dataVencimentoDe = filtro.dataVencimentoDe ?
      moment(filtro.dataVencimentoDe).format('YYYY-MM-DD') : '';
    filtro.dataVencimentoAte = filtro.dataVencimentoAte ?
      moment(filtro.dataVencimentoAte).format('YYYY-MM-DD') : '';

    return filtro;
  };

  async requestToken(): Promise<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic YW5ndWxhcjpAbmd1bEByMA==',
      'Accept': '*/*',
    });

    return await this.httpClient.post<any>(`http://localhost:8080/oauth/token`,
      this.user, { headers }).toPromise()
      .then((token: any) => token.access_token)
      .catch((error) => console.error(error.message));
  };

  async pesquisar(filtro: LancamentoFiltro): Promise<any> {
    filtro = this.converterDate(filtro);

    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${await this.requestToken()}`,
    });

    const params = new HttpParams({ fromObject: { ...filtro } });

    return await this.httpClient.get<any>(`${this.url}?resumo`, { headers, params })
      .toPromise().then((data) => data)
      .catch((error) => console.error(error.message));
  };

  async delete(codigo: number): Promise<any> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${await this.requestToken()}`,
    });

    return this.httpClient.delete<any>(`${this.url}/${codigo}`, { headers })
      .toPromise().then((data) => data)
      .catch((error) => console.error(error.message));
  };

  async categoria(): Promise<any> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${await this.requestToken()}`,
    });

    return await this.httpClient.get<any>(`http://localhost:8080/api/v1/categorias`, { headers })
      .toPromise().then((data) => data)
      .catch((error) => console.error(error.message));
  }

  async salvar(lancamento: Lancamento): Promise<any> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${await this.requestToken()}`,
    });

    return this.httpClient.post<any>(`${this.url}`, lancamento, { headers })
      .toPromise().then((data) => data)
      .catch((error) => console.error(error.message));
  }


}

import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';

export interface LancamentoFiltro {
  descricao: string;
  dataVencimentoDe: string;
  dataVencimentoAte: string;
}

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
  ) { }

  converterDate(filtro: LancamentoFiltro): LancamentoFiltro {
    filtro.dataVencimentoDe = filtro.dataVencimentoDe ?
      moment(filtro.dataVencimentoDe).format('YYYY-MM-DD') : '';
    filtro.dataVencimentoAte = filtro.dataVencimentoAte ?
      moment(filtro.dataVencimentoAte).format('YYYY-MM-DD') : '';

    return filtro;
  }

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
  }

  async pesquisar(filtro: LancamentoFiltro): Promise<any> {
    filtro = this.converterDate(filtro);

    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${await this.requestToken()}`,
    });

    const params = new HttpParams({ fromObject: { ...filtro } });

    return await this.httpClient.get<any>(`${this.url}?resumo`, { headers, params })
      .toPromise().then((data) => data.content)
      .catch((error) => console.error(error.message));
  }
}

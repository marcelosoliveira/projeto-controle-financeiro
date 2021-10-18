import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LancamentoService } from '../lancamento/lancamento.service';
import { Pessoa } from './pessoa';

export class PessoasFiltro {
  public nome: string = '';
  public page: number = 0;
  public size: number = 3;
}

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private url: string = 'http://localhost:8080/api/v1/pessoas'

  constructor(
    private httpclient: HttpClient,
    private lancamentoService: LancamentoService
  ) { };

  async pesquisar(filtro: PessoasFiltro): Promise<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${await this.lancamentoService.requestToken()}`
    });

    const params: HttpParams = new HttpParams({
      fromObject: { ...filtro }
    });

    return this.httpclient.get<any>(this.url, { headers, params }).toPromise()
      .then((data) => data)
      .catch((error) => console.error(error.message));
  }

  async listarTodas(): Promise<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${await this.lancamentoService.requestToken()}`
    });

    return this.httpclient.get<any>(this.url, { headers }).toPromise()
      .then((data) => data.content)
      .catch((error) => console.error(error.message));
  }

  async delete(codigo: number): Promise<any> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${await this.lancamentoService.requestToken()}`,
    });

    return this.httpclient.delete<any>(`${this.url}/${codigo}`, { headers })
      .toPromise().then((data) => data)
      .catch((error) => console.error(error.message));
  }

  async status(status: any): Promise<any> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${await this.lancamentoService.requestToken()}`,
    });

    return this.httpclient.put<any>(`${this.url}/${status.codigo}/ativo`, status.ativo, { headers })
      .toPromise().then((data) => data)
      .catch((error) => console.error(error.message));
  }

  async salvar(pessoa: Pessoa): Promise<any> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${await this.lancamentoService.requestToken()}`,
    });

    return this.httpclient.post<any>(`${this.url}`, pessoa, { headers })
      .toPromise().then((data) => data)
      .catch((error) => console.error(error.message));
  }

}

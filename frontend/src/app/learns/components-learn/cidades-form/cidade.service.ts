import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  private url: string = 'http://localhost:3000/api/cidades';

  constructor(private httpClient: HttpClient) { }

  consultar(): Observable<any> {
    return this.httpClient.get<any>(this.url);
  }

  adicionar(cidade: any): Observable<any> {
    return this.httpClient.post<any>(this.url, cidade);
  }

  atualizar(cidade: any): Observable<any> {
    return this.httpClient.put<any>(`${this.url}/${cidade.id}`, cidade);
  }

  excluir(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}/${id}`);
  }

}

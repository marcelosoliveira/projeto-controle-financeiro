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

  adicionar(name: string): Observable<any> {
    return this.httpClient.post<any>(this.url, { name });
  }

  atualizar(id: number, name: string): Observable<any> {
    return this.httpClient.put<any>(`${this.url}/${id}`, { name });
  }

  excluir(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}/${id}`);
  }

}

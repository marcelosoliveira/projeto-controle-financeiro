import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class LancamentoService {

  private url: string = 'http://localhost:8080/api/v1/lancamentos';
  private token: string = "";

  // private formData: HttpHeaders = new HttpHeaders()
  // .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==')
  // .append('Content-Type', 'multipart/form-data');
  // 'Content-Type': 'application/x-www-form-urlencoded',
  // 'Authorization': 'Basic ' + Buffer.from('admin:admin').toString('base64')

  private request: any = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': 'Basic YW5ndWxhcjpAbmd1bEByMA=='
    },
    body: 'grant_type=password'
      + '&username=admin@algamoney.com'
      + '&password=admin',
  };

  private headers: HttpHeaders = new HttpHeaders().set(
    'Authorization', `Bearer ${this.token}`
  );

  constructor(
    private httpClient: HttpClient,
  ) { }

  requestToken(): Observable<any> {
    console.log(this.request);
    return this.httpClient.post<any>(`http://localhost:8080/oauth/token`, { request: this.request });
  }

  pesquisar(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}`, { headers: this.headers });
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class LancamentoService {

  private url: string = 'http://localhost:8080/api/v1/lancamentos';

  private request: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic YW5ndWxhcjpAbmd1bEByMA==',
      'Accept': '*/*',
    }),
  };

  private user: string = 'grant_type=password'
    + '&username=admin@algamoney.com'
    + '&password=admin';

  private headers: HttpHeaders = new HttpHeaders({
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNjMzMzAzNDU5LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiI1dDBJMGZhTVRMZmZDZFFCQWdVcUx5VXNrR1EiLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.BfywW_pEyPzVLVoCuVtDVPSk5hVzThzlqIIxBwvv8Bk`,
  });

  constructor(
    private httpClient: HttpClient,
  ) { }

  async requestToken(): Promise<any> {
    await this.httpClient.post<any>(`http://localhost:8080/oauth/token`,
      this.user, this.request).toPromise()
      .then((token: any) => console.log(token.access_token))
      .catch((error) => console.error(error.message));
  }

  pesquisar(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}?resumo`, { headers: this.headers });
  }
}

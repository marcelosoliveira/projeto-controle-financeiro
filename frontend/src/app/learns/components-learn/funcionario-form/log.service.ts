import { Injectable, Inject } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(@Inject('LogService') private prefixo: string) {};

  log(msg: string): void {
    console.log(`${this.prefixo}: ${msg}`);
  }

}

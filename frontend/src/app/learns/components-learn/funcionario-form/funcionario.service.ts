import { LogService } from './log.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  public ultimoId: number = 1;
  public persons: any = [{id: 1, name: "Marcelo"}];

  constructor(public logService: LogService) { }

  addPerson(name: string): void {
    this.logService.log(`Adiconando: ${name}`);
    const person = {
      id: ++this.ultimoId,
      name
    }
    this.persons.push(person);
  }

  consultar(): any {
    return this.persons;
  }

}

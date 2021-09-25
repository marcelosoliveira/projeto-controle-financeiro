import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  public ultimoId: number = 1;
  public persons: any = [{id: 1, name: "Marcelo"}];

  constructor() { }

  addPerson(name: string): void {
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

export class FuncionarioAbreviadoService extends FuncionarioService {
  addPerson(name: string): void {
    super.addPerson(name.substr(0,3) + "...");
  }
}

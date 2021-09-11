import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  public ultimoId: number = 0;
  public name: string = "Marcelo dos Santos";
  public add: boolean = false;
  
  @Output()
  public addPerson = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addName(name: string): void {
    this.add = true;

    const person = { 
      id: ++this.ultimoId, name 
    };

    this.addPerson.emit(person);
  }

}

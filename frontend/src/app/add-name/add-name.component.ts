import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.css']
})
export class AddNameComponent implements OnInit {

  public ultimoId: number = 0;

  public name: string = "Marcelo dos Santos";

  public add: boolean = false;

  public persons: any[] = [];

  constructor() { };

  ngOnInit(): void {
  }

  addName(name: string): void {
    this.add = true;
    this.persons = [
      ...this.persons, 
      { id: ++this.ultimoId, name }
    ];
  }

}

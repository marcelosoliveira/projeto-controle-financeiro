import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.css']
})
export class AddNameComponent implements OnInit {

  public persons: any[] = [];

  constructor() { };

  ngOnInit(): void {
  }

  addIt(person: any): void {
    this.persons.push(person);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.css']
})
export class AddNameComponent implements OnInit {

  name: string = "Marcelo dos Santos"

  add: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addName(): void {
    this.add = true;
  }

}

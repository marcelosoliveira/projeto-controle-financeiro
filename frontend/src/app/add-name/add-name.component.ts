import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.css']
})
export class AddNameComponent implements OnInit {

  name: string = "Marcelo dos Santos"

  value: any = "";

  constructor() { }

  ngOnInit(): void {
  }

  addName(name: string): void {
    this.name = name;
  }

  inputEmpty({ value }: any): void {
    this.value = value;
  }

}

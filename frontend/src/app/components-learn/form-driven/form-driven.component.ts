import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class Client {
  public name: string = "";
  public email: string = "";
  public job: string = "";
}

@Component({
  selector: 'app-form-driven',
  templateUrl: './form-driven.component.html',
  styleUrls: ['./form-driven.component.css']
})
export class FormDrivenComponent implements OnInit {

  public client = new Client();

  public jobs: string[] = ['Programador', 'Empresário', 'Outra'];

  constructor() { }

  ngOnInit(): void {
  }

  save(form: NgForm): any {
    const { name, email, job} = form.value;

    this.client.name = name;
    this.client.email = email;
    this.client.job = job;

    console.log(form);
    console.log(this.client);
  }

}

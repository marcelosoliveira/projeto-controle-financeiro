import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  name = 'Marcelo dos Santos';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-learn',
  templateUrl: './pipe-learn.component.html',
  styleUrls: ['./pipe-learn.component.css']
})
export class PipeLearnComponent implements OnInit {

  public name: string = "Marcelo dos Santos";
  public birthDate: Date = new Date(1986, 8, 7);
  public price: number = 12855.32;
  public resPrice: number = 0.57392;

  constructor() { }

  ngOnInit(): void {
  }

}

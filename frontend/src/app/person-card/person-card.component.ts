import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  // styleUrls: ['./person-card.component.css']
  styles: [`
    .card-block {
      text-transform: uppercase;
      color: blue;
    }
  `]
})
export class PersonCardComponent implements OnInit {

  @Input() personCard: any;

  constructor() { }

  ngOnInit(): void {
  }

  getStyleCard(): object {
    return {
      // borderWidth: this.personCard.id + "px",
      backgroundColor: this.getColor(),
    }
  }

  getColor(): string {
    if (this.personCard.id % 2 == 0) {
      return 'lightblue';
    } else {
      return 'lightgreen';
    }
  }

}

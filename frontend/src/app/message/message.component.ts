import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
  <div name="message" class="p-error" *ngIf="isError()">
    {{ text }}
  </div>
  `,
  styles: []
})

export class MessageComponent {

  @Input()
  control: any;

  @Input()
  text!: string;

  @Input()
  error!: string;

  isError(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }


}

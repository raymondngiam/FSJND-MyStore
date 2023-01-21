import { Component } from '@angular/core';

@Component({
  selector: 'app-check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.css']
})
export class CheckOutFormComponent {
  fullName = '';
  address = '';
  creditCardNumber = '';

  onCheckOut(): void {
    alert(`clicked! creditcard: ${this.creditCardNumber}`);
  }
}

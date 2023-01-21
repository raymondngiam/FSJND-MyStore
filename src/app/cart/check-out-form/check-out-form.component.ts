import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.css']
})
export class CheckOutFormComponent {
  fullName = '';
  address = '';
  creditCardNumber = '';

  constructor(private cartService: CartService) {}

  checkCartNotEmpty(): boolean {
    const cartItems = this.cartService.getCartItems();
    if (cartItems.length != 0) {
      return true;
    } else {
      return false;
    }
  }

  onCheckOut(): void {
    if (this.checkCartNotEmpty()) {
      alert(`clicked! creditcard: ${this.creditCardNumber}`);
    } else {
      alert(`cart is empty`);
    }
  }
}

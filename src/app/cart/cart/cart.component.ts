import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  onUpdateQty() {
    this.cartService.updateCartItems(this.cartItems);
    alert(`Quantity updated.`);
  }

  deleteCartItem(productId: number) {
    this.cartService.deleteCartItem(productId);
    this.cartItems = this.cartService.getCartItems();
  }
}

import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  myStorage = window.localStorage;

  constructor(private productService: ProductService) {}

  addToCart(productId: number, quantity: number): void {
    const newItem: CartItem = {
      productId: productId,
      quantity: quantity
    };
    const cartItems: CartItem[] = this.getCartItems();

    if (cartItems.length != 0) {
      const index = cartItems.findIndex((t) => t.productId == productId);
      if (index == -1) {
        cartItems.push(newItem);
      } else {
        cartItems[index].quantity = quantity;
      }
    } else {
      cartItems.push(newItem);
    }
    this.myStorage.setItem('cart', JSON.stringify(cartItems));
  }

  getCartItems(): CartItem[] | [] {
    const cartItems = this.myStorage.getItem('cart');
    return cartItems ? JSON.parse(cartItems) : [];
  }
}

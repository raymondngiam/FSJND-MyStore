import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  products: Product[] = [];
  totalPrice = 0;
  flag = true;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.productService.getProductList().subscribe((t) => {
      this.products = t;
      this.updateTotalPrice();
    });
  }

  updateTotalPrice(): void {
    this.totalPrice = 0;
    for (const item of this.cartItems) {
      const price = this.products.filter((p) => p.id == item.productId)[0]
        .price;
      this.totalPrice += price * item.quantity;
    }
  }

  onUpdateQty() {
    this.cartService.updateCartItems(this.cartItems);
    alert(`Quantity updated.`);
    this.updateTotalPrice();
  }

  deleteCartItem(productId: number) {
    this.cartService.deleteCartItem(productId);
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalPrice();
  }
}

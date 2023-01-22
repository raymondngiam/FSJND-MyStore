import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import {
  faExclamationTriangle,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.css']
})
export class CheckOutFormComponent implements OnInit {
  fullName = '';
  address = '';
  creditCardNumber = '';
  products: Product[] = [];
  alertIcon = faExclamationTriangle;
  checkIcon = faCheck;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe((p) => {
      this.products = p;
    });
  }

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
      const cartItems = this.cartService.getCartItems();
      let totalPrice = 0;
      for (const item of cartItems) {
        const price = this.products.filter((p) => p.id == item.productId)[0]
          .price;
        totalPrice += price * item.quantity;
      }
      this.router.navigateByUrl(`success/${this.fullName}/${totalPrice}`);
      this.cartService.deleteAll();
    } else {
      alert(`cart is empty`);
    }
  }

  numberOnly(event: KeyboardEvent): boolean {
    if (event.key >= '0' && event.key <= '9') {
      return true;
    }
    return false;
  }
}

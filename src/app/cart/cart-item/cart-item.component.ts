import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem = {
    productId: 0,
    quantity: 0
  };
  @Output() deleteEvent = new EventEmitter<number>();
  productUrl = '';
  price = 0;
  name = '';
  trashIcon = faTrash;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe((products) => {
      const product = products.filter(
        (p) => p.id == this.cartItem.productId
      )[0];
      this.name = product.name;
      this.price = product.price;
      this.productUrl = product.url;
    });
  }

  onDelete() {
    this.deleteEvent.emit(this.cartItem.productId);
  }
}

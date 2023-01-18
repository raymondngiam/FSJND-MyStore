import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() productId = 0;
  @Input() quantity = 0;
  productUrl = '';
  price = 0;
  name = '';
  trashIcon = faTrash;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe((products) => {
      const product = products.filter((p) => p.id == this.productId)[0];
      this.name = product.name;
      this.price = product.price;
      this.productUrl = product.url;
    });
  }
}

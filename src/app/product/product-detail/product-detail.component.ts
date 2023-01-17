import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id = 0;
  product: Product | null = null;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id') as string);
    });
    this.productService.getProductList().subscribe((p) => {
      this.product = p.filter((item) => item.id == this.id)[0];
    });
  }

  onSubmit(product: Product, eventTarget: HTMLSelectElement): void {
    const qty = parseInt(eventTarget.value);
    const message = `${product.name}: Qty = ${qty}`;
    alert(message);
    this.cartService.addToCart(this.id, qty);
  }
}

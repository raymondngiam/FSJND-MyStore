import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() productId = 0;
  @Input() productName = '';
  @Input() productPrice = 0;
  @Input() productUrl = '';
}

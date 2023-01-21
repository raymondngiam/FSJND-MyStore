import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CheckOutFormComponent } from './check-out-form/check-out-form.component';

@NgModule({
  declarations: [CartComponent, CartItemComponent, CheckOutFormComponent],
  imports: [CommonModule]
})
export class CartModule {}

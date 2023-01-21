import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CheckOutFormComponent } from './check-out-form/check-out-form.component';
import { OrderCompletedComponent } from './order-completed/order-completed.component';

@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    CheckOutFormComponent,
    OrderCompletedComponent
  ],
  imports: [CommonModule]
})
export class CartModule {}

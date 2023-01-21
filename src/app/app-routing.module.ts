import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from 'src/app/product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CartComponent } from './cart/cart/cart.component';
import { OrderCompletedComponent } from './cart/order-completed/order-completed.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'item-detail/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'success/:firstName/:totalPrice', component: OrderCompletedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

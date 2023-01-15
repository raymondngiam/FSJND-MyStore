import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

import { HeaderComponent } from './misc/header/header.component';
import { NavbarComponent } from './misc/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

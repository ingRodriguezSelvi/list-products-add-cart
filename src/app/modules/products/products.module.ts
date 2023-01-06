import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CardProductsComponent } from './components/card-products/card-products.component';
import {ProductsRoutingModule} from "./products-routing.module";
import {MaterialModule} from "../../material/material.module";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    ProductsComponent,
    CardProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule
  ],
  exports: [
    ProductsRoutingModule
    ]
})
export class ProductsModule { }

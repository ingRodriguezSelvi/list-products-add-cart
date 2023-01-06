import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import {CartRoutingModule} from "./cart-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {AppModule} from "../../app.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    SharedModule
  ],
  exports:[
    CartRoutingModule
  ]
})
export class CartModule { }

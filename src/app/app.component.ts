import { Component } from '@angular/core';
import {CartService} from "./modules/cart/services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(cartService: CartService) {
    cartService.createCart();
  }
  title = 'list-products';
}

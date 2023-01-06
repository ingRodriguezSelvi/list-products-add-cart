import { Component, OnInit } from '@angular/core';
import {CartService} from "./services/cart.service";
import {CartInterface} from "../../models/cart.interface";
import {Router} from "@angular/router";
import {CurrencyChangeService} from "../../services/currency-change.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor( private cartService: CartService, private router:Router, private currencyService:CurrencyChangeService) { }

  cart: CartInterface = this.cartService.getCart();

  ngOnInit(): void {
    this.getAmount(this.cart.total);
  }

  getAmount(amount: number) {
    this.currencyService.changeCurrency(amount).subscribe((res: any) => {
      console.log(res);
      this.cart.total = res;
    });
  }

  clearCart() {
    this.cartService.clearCart();
    this.router.navigate(['/products']);
  }

}

import { Injectable } from '@angular/core';
import {CartInterface} from "../../../models/cart.interface";
import {ProductInterface} from "../../../models/product.interface";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart: CartInterface = {
    id: 0,
    products: [],
    total: 0
  }

  createCart() {
    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  getCart(): CartInterface {
    if (localStorage.getItem('cart') === null) this.createCart();
    return JSON.parse(localStorage.getItem('cart')||'{}');
  }

  addProductToCart(product: ProductInterface) {
    if (localStorage.getItem('cart') === null) this.createCart();
    let cart: CartInterface = this.getCart();
    let productExists = false;
    for (let items in cart.products) {
      if (cart.products[items].product.id === product.id) {
        cart.products[items].quantity++;
        cart.products[items].subtotal = cart.products[items].product.price * cart.products[items].quantity;
        productExists = true;
        break;
      }
    }
    if (!productExists) {
      cart.products.push({
        product: product,
        quantity: 1,
        subtotal: product.price
      });
    }
    cart.total = this.getCartTotal(cart);
    this.updateCart(cart);
  }

  updateCart(cart: CartInterface) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCartTotal(cart:CartInterface): number {

    let total = 0;
    for (let items in cart.products) {
      total += cart.products[items].subtotal;
    }
    console.log(total);
    return total;
  }

  clearCart() {
    localStorage.removeItem('cart');
    this.createCart();
  }
}

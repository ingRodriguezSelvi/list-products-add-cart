import {Component, Input, OnInit} from '@angular/core';
import {ProductInterface} from "../../../../models/product.interface";
import {CartService} from "../../../cart/services/cart.service";

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.css']
})
export class CardProductsComponent implements OnInit {

  constructor( private cartService:CartService) { }

  @Input() product?: ProductInterface;

  ngOnInit(): void {
  }

  addProductToCart(product: ProductInterface) {
    this.cartService.addProductToCart(product);
  }

}

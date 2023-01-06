import {Component, OnInit} from '@angular/core';
import {ProductsServicesService} from "./services/products-services.service";
import {ProductInterface} from "../../models/product.interface";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsServicesService) {
  }

  products: ProductInterface[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe(products => {
        this.products = products;
      }
    );
  }
}

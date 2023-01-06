import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductInterface} from "../../../models/product.interface";


@Injectable({
  providedIn: 'root'
})
export class ProductsServicesService {


  constructor( private http:HttpClient ) { }

  getProducts():Observable<ProductInterface[]>{
    const filePath = 'assets/mocks/products.json';
    return this.http.get<ProductInterface[]>(filePath);
  }
}

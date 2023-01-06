import {ProductInterface} from "./product.interface";

export interface CartInterface{
  id: number;
  products: ProductCart[];
  total: number;

}

export interface ProductCart{
  product: ProductInterface;
  quantity: number;
  subtotal: number;
}

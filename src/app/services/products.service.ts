import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    {productId:101, productName:"samsung"},
    {productId:102, productName:"lg"},
    {productId:103, productName:"onida"},
  ]

  getProductsInfo(){
    return this.products;
  }
}

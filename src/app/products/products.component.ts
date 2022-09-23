import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any = [ ];
  constructor(private productsService:ProductsService) { 
    this.products = productsService.getProductsInfo()
  }

}

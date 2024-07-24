import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/srvices/cart.service';
import { ProductService } from 'src/app/srvices/product.service';
import { ProductType } from 'src/app/types/product.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: ProductType[] = [];

  constructor(private productService : ProductService,
    private cartService : CartService,
    private router : Router) {
    this.products = this.productService.getProducts();
  }

  ngOnInit(): void {
    
  }
  public addToCart(title: string): void {
    this.cartService.product = title;
    this.router.navigate(['/order'], {queryParams : {product : title}})
  }

}

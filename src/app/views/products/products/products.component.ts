import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of, retry, tap } from 'rxjs';
import { CartService } from 'src/app/shared/srvices/cart.service';
import { ProductService } from 'src/app/shared/srvices/product.service';
import { ProductType } from 'src/types/product.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: ProductType[] = [];
  public loading: boolean = false;

  constructor(private productService : ProductService,
    private cartService : CartService,
    private router : Router,
    private http : HttpClient,
  ) {
    // this.products = this.productService.getProducts();
  }

  ngOnInit(): void {
    this.loading = true
    this.productService.getProducts()
      .pipe(
        tap(() => {this.loading = false})
      )
      .subscribe({
        next: (data) => {
          this.products = data;
        },
        error: (error) => {
          console.error(error);
          this.router.navigate(['/'])
        }
      })

  }


  public addToCart(title: string): void {
    this.cartService.product = title;
    this.router.navigate(['/order'], {queryParams : {product : title}})
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/srvices/product.service';
import { ProductType } from 'src/app/types/product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: ProductType = {} as ProductType;

  constructor(private activatedRoute : ActivatedRoute, private productService : ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if(params['id']) {
        const product = this.productService.getProduct(+params['id']);
        if(product) {
          this.product = product
        } else {
          this.router.navigate(['/']);
        }
      }
    });
  }

}

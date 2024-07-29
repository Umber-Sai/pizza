import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/shared/srvices/cart.service';
import { ProductService } from 'src/app/shared/srvices/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy{

  public formValues = {
    productTitle : '',
    address: '',
    phone: ''
  }

  private subscription : Subscription | null = null
  
  constructor(private cartService : CartService,
    private activatedRoute : ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // if(this.cartService.product) this.formValues.productTitle = this.cartService.product
    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if(params['product']) {
        console.log(params['product']);
        this.formValues.productTitle = params['product'];
      }
    });
  }

  test() {
    this.subscription?.unsubscribe();
  }

  public createOrder(): void {
    if (!this.formValues.productTitle) {
      alert('Заполните пиццу');
      return;
    }
    if (!this.formValues.address) {
      alert('Заполните адресс');
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните телефон');
      return;
    }

    this.productService.createOrder({
      product: this.formValues.productTitle,
      address: this.formValues.address,
      phone: this.formValues.phone
    }).subscribe({
      next: (response) => {
        if (response.success && !response.message) {
          alert('Спасибо за заказ!');

          this.formValues = {
            productTitle: '',
            address: '',
            phone: ''
          }
        } else {
          alert('Ошибка');
        }
      }
    })

    
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}

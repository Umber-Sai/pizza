import { Component, OnInit } from '@angular/core';
import { ProductType } from './types/product.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public products: ProductType[] = [
    {
      image: '1.png',
      title: 'Мясная Делюкс',
      description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
      datetime: '2022-12-31 15:00:00'
    },
    {
      image: '',
      title: 'Морская Премиум',
      description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
      datetime: '2022-12-31 15:00:00'
    },
    {
      image: '3.png',
      title: 'Бекон и Сосиски',
      description: 'Бекон, сыр, сосиски, ананас, томатная паста',
      datetime: '2022-02-31 15:00:00'
    },
    {
      image: '4.png',
      title: 'Куриная Делюкс',
      description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
      datetime: '2022-12-01 15:00:00'
    },
    {
      image: '5.png',
      title: 'Барбекю Премиум',
      description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
      datetime: '2001-12-31 15:00:00'
    },
    {
      image: '6.png',
      title: 'Пепперони Дабл',
      description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
      datetime: '2022-12-31 15:00:00'
    },
    {
      image: '7.png',
      title: 'Куриное трио',
      description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
      datetime: '2022-11-31 15:00:00'
    },
    {
      image: '8.png',
      title: 'Сырная',
      description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
      datetime: '2022-12-31 10:00:00'
    },
  ];

  public formValues = {
    productTitle: '',
    address: '',
    phone: ''
  }

  lateData: Promise<string> | null = null;

  ngOnInit(): void {
    this.lateData = new Promise<string>(function (resolve) {
      setTimeout(() => {
        resolve('Hello');
      }, 3000)
    })
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToCart(title: string, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = title;
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

    alert('Спасибо за заказ!');

    this.formValues = {
      productTitle: '',
      address: '',
      phone: ''
    }
  }
}

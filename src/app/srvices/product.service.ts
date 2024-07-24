import { Injectable } from '@angular/core';
import { ProductType } from '../types/product.type';

@Injectable()
export class ProductService {

  private products : ProductType[] = [
    {
      id : 1,
      image: '1.png',
      title: 'Мясная Делюкс',
      description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
      datetime: '2022-12-31 15:00:00'
    },
    {
      id : 2,
      image: '',
      title: 'Морская Премиум',
      description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
      datetime: '2022-12-31 15:00:00'
    },
    {
      id : 3,
      image: '3.png',
      title: 'Бекон и Сосиски',
      description: 'Бекон, сыр, сосиски, ананас, томатная паста',
      datetime: '2022-02-31 15:00:00'
    },
    {
      id : 4,
      image: '4.png',
      title: 'Куриная Делюкс',
      description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
      datetime: '2022-12-01 15:00:00'
    },
    {
      id : 5,
      image: '5.png',
      title: 'Барбекю Премиум',
      description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
      datetime: '2001-12-31 15:00:00'
    },
    {
      id : 6,
      image: '6.png',
      title: 'Пепперони Дабл',
      description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
      datetime: '2022-12-31 15:00:00'
    },
    {
      id : 7,
      image: '7.png',
      title: 'Куриное трио',
      description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
      datetime: '2022-11-31 15:00:00'
    },
    {
      id : 8,
      image: '8.png',
      title: 'Сырная',
      description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
      datetime: '2022-12-31 10:00:00'
    },
  ];
  constructor() { }

  getProducts() : ProductType[] {
    //ajax
    return this.products
  }

  getProduct(id: number): ProductType | undefined{
    return this.products.find(item => item.id === id)
  }
}

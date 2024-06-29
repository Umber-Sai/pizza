import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';
import { ProductType } from 'src/app/types/product.type';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ProductComponent  {

  @Input() product: ProductType = {} as ProductType;

  // @Input()
  // get product(): ProductType {return this._product; }
  // set product(param: ProductType) {
  //   param.title = param.title.toLocaleUpperCase();
  //   this._product = param;
  // }
  // private _product: ProductType;

  @Output() addToCardEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TitleComponent) 
  private titleComponent!: TitleComponent;

  @ViewChild('elem')
  private elem!: ElementRef;

  constructor() { 
    this.product = {
      image: '',
      title: '',
      description: '',
    }
  }

  addProductToCart() {
    this.addToCardEvent.emit(this.titleComponent.toUpper());
  }

}

//23:22
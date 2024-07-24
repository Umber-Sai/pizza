import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';
import { ProductType } from 'src/app/types/product.type';
import { TitleComponent } from '../title/title.component';
import { CartProductService } from 'src/app/srvices/cart-product.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [CartProductService]
})
export class ProductCardComponent  {

  @Input() product: ProductType = {} as ProductType;
  @Output() addToCardEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TitleComponent) 
  private titleComponent!: TitleComponent;

  @ViewChild('elem')
  private elem!: ElementRef;

  constructor( public cartProductService : CartProductService) { 
  }

  addProductToCart() {
    this.cartProductService.count++;
    this.addToCardEvent.emit(this.titleComponent.title);
  }

}

//23:22
import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';
import { ProductType } from 'src/app/types/product.type';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

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

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngAfterContentInit():void {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked():void {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.elem)
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy-------------------------');
  }



  addProductToCart() {
    this.addToCardEvent.emit(this.titleComponent.toUpper());
  }

}

//23:22
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, Subscription, map } from 'rxjs';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
import { CartService } from 'src/app/shared/srvices/cart.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  private subscription: Subscription | null = null;
  private subject : Subject<number>;

  constructor(public cartService: CartService) {

    this.subject = new Subject<number>();
    let count = 0;
      const interval = setInterval(() => {
        this.subject.next(count++);
      }, 1000);
      const timeout1 = setTimeout(() => {
        this.subject.complete();
      }, 4000)
  }

  // @ViewChild('popup') popup!: TemplateRef<ElementRef>;

  ngOnInit(): void {
    this.subscription = this.subject
    .pipe(
      map((number) => {
        return number * 10;
      })
    )
    .subscribe(
      {
        next: (param: number) => {
          console.log('subscriber1 ' + param);
        },
        error: (error: string) => {
          console.error('ERROR!!! ' + error)
        }

      })
  }




  test() {
    this.subject
    .pipe(
      map(number => {
        return 'Число: ' + number
      })
    )
    .subscribe((param: string) => {
      console.log('subscriber2 ' + param);
    })
  }

  @ViewChild(PopupComponent)
  private popup!: PopupComponent;


  ngAfterViewInit(): void {
    this.popup.open()
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}

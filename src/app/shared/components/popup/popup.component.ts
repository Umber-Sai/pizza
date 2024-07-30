import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  @Input() data : string = '';
  @ViewChild('popup') popup!: TemplateRef<ElementRef>;
  private modalService = inject(NgbModal);

  open(): void {
    this.modalService.open(this.popup)
  }
 

}

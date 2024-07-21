import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/srvices/cart.service';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public cartService : CartService) { }

  ngOnInit(): void {
  }

}

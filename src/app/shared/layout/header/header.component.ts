import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { CartService } from '../../srvices/cart.service';


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public cartService : CartService, private authService: AuthService) { }
  public isLogged: boolean = false

  ngOnInit(): void {
    this.authService.isLoggedSubject.subscribe(param => {
      this.isLogged = param
    })
  }

  logIn() {
    this.authService.logIn()
  }

  logOut() {
    this.authService.logOut()
  }

}

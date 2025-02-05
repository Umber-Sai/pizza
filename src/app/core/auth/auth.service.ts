import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {

  constructor() { }

  public isLoggedSubject: Subject<boolean> = new Subject
  private isLogged = false;

  logIn() {
    this.isLogged = true;
    this.isLoggedSubject.next(this.isLogged)
  }

  logOut() {
    this.isLogged = false;
    this.isLoggedSubject.next(this.isLogged)
  }

  getTocken() {
    return 'test'
  }

  isLoggedIn(): boolean {
    return this.isLogged
  }
}

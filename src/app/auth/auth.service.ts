import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isLoggedSubject: Subject<boolean> = new Subject
  private isLogged = true;

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

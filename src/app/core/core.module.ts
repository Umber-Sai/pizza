import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    
  ],
  providers : [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard,
    AuthService
  ]
})
export class CoreModule { }

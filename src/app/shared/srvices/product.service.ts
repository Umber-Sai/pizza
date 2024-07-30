import { Injectable } from '@angular/core';
import { ProductType } from '../../../types/product.type';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, of, retry, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products : ProductType[] = [];
  constructor(private http : HttpClient) {}

  getProducts() : Observable<ProductType[]> {
    return this.http.get<ProductType[]>( environment.apiUrl + 'pizzas');
  }

  getProduct(id: number):Observable<ProductType>{
    return this.http.get<ProductType>(environment.apiUrl + `pizzas?id=${id}`);
  }

  createOrder (data: { product: string, address: string, phone: string}) {
    return this.http.post<{success : boolean, message?: string}>( environment.apiUrl + ` order-pizza`, data);
  }
}

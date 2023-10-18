import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // real
  url: string = "https://6487d4750e2469c038fc8bea.mockapi.io/api/v1/products"
  // error
  // url: string = "https://6487d4750e2469c038fc8.mockapi.io/api/v1/products"
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.url, { observe: 'response' })
  }
}

export interface Product {
  name: string;
  price: number;
  description: string;
  id: string;
}

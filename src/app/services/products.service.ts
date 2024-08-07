  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class ProductsService {
    private apiUrl = 'https://fakestoreapi.com/products';

    constructor(private http: HttpClient) { }
    
    getProducts(): Observable<any> {
      console.log('this.products');
      fetch(this.apiUrl)
      return this.http.get(this.apiUrl);
    }
  
    getProduct(id: number): Observable<any> {
      return this.http.get(`${this.apiUrl}/${id}`);
    }
  
    getCategories(): Observable<any> {
      return this.http.get(`${this.apiUrl}/categories`);
    }
  
    getProductsByCategory(category: string): Observable<any> {
      return this.http.get(`${this.apiUrl}/category/${category}`);
    }
    
  }

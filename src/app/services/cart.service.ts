import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private cart = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();

  addToCart(product: any) {
    const currentCart = this.cart.value;
    console.log(this.cart.value);
    
    this.cart.next([...currentCart, product]);
  }

  removeFromCart(productId: number) {
    const currentCart = this.cart.value.filter(item => item.id !== productId);
    this.cart.next(currentCart);
  }

  clearCart() {
    this.cart.next([]);
  }
}

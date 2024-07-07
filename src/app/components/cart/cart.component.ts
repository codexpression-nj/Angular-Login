import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService){

  }

  ngOnInit(): void {
    // this.cartService.cartItems$.subscribe(items => {
    //   this.cartItems = items;
    // });
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}

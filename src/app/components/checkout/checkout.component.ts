import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  constructor(cartService:CartService) {
    
    
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  cartItems: any[] = [];
  totalAmount: number = 0;


  calculateTotal(): void {
    this.totalAmount = this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  placeOrder(): void {
    // Handle order placement logic here
    alert('Order placed successfully!');
    // this.cartService.clearCart();
  }
}

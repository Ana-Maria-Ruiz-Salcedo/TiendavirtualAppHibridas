import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  constructor() {}

  addToCart(product: Product) {
    this.cart.push(product);
  }

  getCart(): Product[] {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }
}

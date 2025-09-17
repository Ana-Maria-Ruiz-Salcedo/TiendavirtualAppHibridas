import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, CurrencyPipe]
})
export class CartPage {
  cart: any[] = [];

  clearCart() {
    this.cart = [];
  }
}

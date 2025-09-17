import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, CurrencyPipe]
})
export class ProductsPage {
  products: any[] = [];

  addToCart(product: any) {
    console.log('Producto agregado:', product);
  }
}

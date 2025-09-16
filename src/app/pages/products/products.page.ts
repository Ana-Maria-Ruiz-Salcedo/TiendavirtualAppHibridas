import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart';
import { Product } from 'src/app/services/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage {
  // Lista de productos de ejemplo
  products: Product[] = [
    { id: 1, name: 'Camiseta', price: 50000 },
    { id: 2, name: 'Pantalón', price: 80000 },
    { id: 3, name: 'Zapatos', price: 120000 }
  ];

  constructor(private cartService: CartService) {}

  // 🔑 ESTE MÉTODO ES EL QUE FALTABA
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} agregado al carrito`);
  }
}

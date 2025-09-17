import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CartPage } from './cart.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,      // habilita *ngIf, *ngFor, currency
    FormsModule,
    IonicModule,       // habilita <ion-*> (header, list, button...)
    RouterModule.forChild([{ path: '', component: CartPage }])
  ],
  declarations: [CartPage],
  providers: [CurrencyPipe]
})
export class CartPageModule {}

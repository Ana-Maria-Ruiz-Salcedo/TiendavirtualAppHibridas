import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Tab3Page } from './tab3.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}

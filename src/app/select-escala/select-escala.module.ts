import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectEscalaPageRoutingModule } from './select-escala-routing.module';

import { SelectEscalaPage } from './select-escala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectEscalaPageRoutingModule
  ],
  declarations: [SelectEscalaPage]
})
export class SelectEscalaPageModule {}

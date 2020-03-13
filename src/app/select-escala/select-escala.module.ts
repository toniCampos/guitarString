import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectEscalaPageRoutingModule } from './select-escala-routing.module';

import { SelectEscalaPage } from './select-escala.page';

import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectEscalaPageRoutingModule,
    MatExpansionModule
  ],
  declarations: [SelectEscalaPage]
})
export class SelectEscalaPageModule {}

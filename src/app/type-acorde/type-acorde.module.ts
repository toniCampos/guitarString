import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeAcordePageRoutingModule } from './type-acorde-routing.module';

import { TypeAcordePage } from './type-acorde.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeAcordePageRoutingModule
  ],
  declarations: [TypeAcordePage]
})
export class TypeAcordePageModule {}

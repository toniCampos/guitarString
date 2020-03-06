import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectNotaPageRoutingModule } from './select-nota-routing.module';

import { SelectNotaPage } from './select-nota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectNotaPageRoutingModule
  ],
  declarations: [SelectNotaPage]
})
export class SelectNotaPageModule {}

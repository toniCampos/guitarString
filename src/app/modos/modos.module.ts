import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModosPageRoutingModule } from './modos-routing.module';

import { ModosPage } from './modos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModosPageRoutingModule
  ],
  declarations: [ModosPage]
})
export class ModosPageModule {}

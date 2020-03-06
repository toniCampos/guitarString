import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectEscalaPage } from './select-escala.page';

const routes: Routes = [
  {
    path: '',
    component: SelectEscalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectEscalaPageRoutingModule {}

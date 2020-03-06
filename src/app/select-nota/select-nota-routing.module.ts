import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectNotaPage } from './select-nota.page';

const routes: Routes = [
  {
    path: '',
    component: SelectNotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectNotaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},  {
    path: 'select-escala',
    loadChildren: () => import('./select-escala/select-escala.module').then( m => m.SelectEscalaPageModule)
  },
  {
    path: 'modos',
    loadChildren: () => import('./modos/modos.module').then( m => m.ModosPageModule)
  },
  {
    path: 'select-nota',
    loadChildren: () => import('./select-nota/select-nota.module').then( m => m.SelectNotaPageModule)
  },
  {
    path: 'type-acorde',
    loadChildren: () => import('./type-acorde/type-acorde.module').then( m => m.TypeAcordePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

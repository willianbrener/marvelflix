import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/characters/characters.module#CharacterModule'
  },
  {
    path: '**',
    redirectTo: 'characters',
    loadChildren: './modules/characters/characters.module#CharacterModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

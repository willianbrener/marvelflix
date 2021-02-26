import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from 'src/app/shared/layout/layout.component';
import {CharacterCardComponent} from './character-card/character-card.component';
import {CharacterDetailComponent} from './character-detail/character-detail.component';
import {CharacterListComponent} from './character-list/character-list.component';

const routes: Routes = [
  {
    path: 'card/:id',
    component: LayoutComponent,
    children: [
      { path: '', component: CharacterCardComponent }
    ]
  },
  {
    path: 'detail/:id',
    component: LayoutComponent,
    children: [
      { path: '', component: CharacterDetailComponent }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: CharacterListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }

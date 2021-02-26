import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CharacterCardComponent} from './character-card/character-card.component';
import {CharacterDetailComponent} from './character-detail/character-detail.component';
import {CharacterListComponent} from './character-list/character-list.component';
import {SharedModule} from '../../shared/shared.module';
import {CharactersRoutingModule} from './character-routing.module';

@NgModule({
  declarations: [CharacterCardComponent, CharacterDetailComponent, CharacterListComponent],
  imports: [
    CommonModule,
    SharedModule,
    CharactersRoutingModule
  ]
})
export class CharacterModule {}

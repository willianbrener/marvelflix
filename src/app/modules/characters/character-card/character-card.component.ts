import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../../../core/entities/character.model';
import { ContextService } from '../../../core/services/core.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html'
})
export class CharacterCardComponent {

  @Input() character: Character;
  @Output() selectedChange = new EventEmitter<Character>();

  constructor(private contextService: ContextService) {}

  getCharacterImage(): string {
    return this.contextService.getImage('landscape_incredible', this.character.thumbnail);
  }

  showCharacter() {
    this.selectedChange.emit(this.character);
  }

}

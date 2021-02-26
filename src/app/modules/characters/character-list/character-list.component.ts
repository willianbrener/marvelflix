import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { EMPTY, Observable, of, Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';

import { Character } from '../../../core/entities/character.model';
import { CharacterService } from '../../../core/services/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Observable<Character[]>;
  isVisible = false;
  selectedCharacter: Character;
  showProgress = false;

  @ViewChild(MatDrawer) private drawer: MatDrawer;
  private searchTerms = new Subject<string>();

  constructor(private characterService: CharacterService) {}

  getCharacters() {
    this.characters = this.searchTerms.pipe(
      filter(term => term.length >= 3),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => {
        this.showProgress = true;
        return this.characterService.getCharacters(term);
      }),
      switchMap(heroes => {
        this.showProgress = false;
        return of(heroes);
      }),
      catchError(() => {
        this.showProgress = false;
        return EMPTY;
      })
    );
  }

  ngOnInit() {
    this.getCharacters();
  }

  search(name: string) {
    this.searchTerms.next(name);
  }

  selectCharacter(character: Character) {
    this.selectedCharacter = character;
    this.drawer.toggle();
  }

  trackByCharacters(index: number, character: Character) { return character.id; }

}

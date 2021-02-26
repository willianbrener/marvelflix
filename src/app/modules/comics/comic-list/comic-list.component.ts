import { Component, Input, OnChanges } from '@angular/core';
import { finalize, map } from 'rxjs/operators';

import { Character } from '../../../core/character.model';
import { Comic } from '../comic.model';
import { ComicService } from '../comics.service';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html'
})
export class ComicListComponent implements OnChanges {

  @Input() character: Character;

  comics: Comic[] = [];
  showProgress = false;

  constructor(private comicService: ComicService) {}

  ngOnChanges() {
    this.comics = [];
    this.showProgress = true;

    this.comicService.getComics(this.character.id).pipe(
      map(comics => this.comics = comics.filter(c => c.digitalId > 0)),
      finalize(() => this.showProgress = false)
    ).subscribe();
  }

  trackByComics(_: number, comic: Comic) { return comic.id; }

}

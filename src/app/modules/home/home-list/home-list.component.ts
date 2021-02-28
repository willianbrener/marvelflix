import {Component, OnInit} from '@angular/core';
import {finalize, map} from 'rxjs/operators';

import {ComicService} from '../../../core/services/comics.service';
import {Comic} from '../../../core/entities/comic';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html'
})
export class HomeListComponent implements OnInit {

  comicsRising: Comic[] = [];
  comicsRecommended: Comic[] = [];
  comicsWatchAgain: Comic[] = [];
  showProgress = false;

  constructor(private comicService: ComicService) {}

  getComicsRising() {
    this.comicsRising = [];

    this.comicService.getComics('10', '0').pipe(
      map(comics => this.comicsRising = comics.filter(c => c.digitalId > 0)),
    ).subscribe();
  }

  getComicsRecommended() {
    this.comicsRecommended = [];
    this.showProgress = true;

    this.comicService.getComics('10', '12').pipe(
      map(comics => this.comicsRecommended = comics.filter(c => c.digitalId > 0)),
    ).subscribe();
  }

  getComicsWatchAgain() {
    this.comicsWatchAgain = [];
    this.showProgress = true;

    this.comicService.getComics('10', '25').pipe(
      map(comics => this.comicsWatchAgain = comics.filter(c => c.digitalId > 0)),
    ).subscribe();
  }

  ngOnInit() {
    this.getComicsRising();
    this.getComicsRecommended();
    this.getComicsWatchAgain();
  }

  trackByComics(_: number, comic: Comic) { return comic.id; }

}

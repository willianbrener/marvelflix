import { Component, Input } from '@angular/core';

import { ContextService } from '../../../core/services/core.service';
import { Comic } from '../../../core/entities/comic.model';

@Component({
  selector: 'app-comic-detail',
  template: `
    <a href="http://read.marvel.com/#/book/{{comic.digitalId}}" target="_blank">
      <img [src]="getComicImage()">
    </a>
  `
})
export class ComicDetailComponent {

  @Input() comic: Comic;

  constructor(private contextService: ContextService) {}

  getComicImage(): string {
    return this.contextService.getImage('portrait_fantastic', this.comic.thumbnail);
  }

}

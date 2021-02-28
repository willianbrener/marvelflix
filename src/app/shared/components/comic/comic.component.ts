import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {Comic} from '../../../core/entities/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  @Input() comic: Comic;
  @ViewChild('trailer', { static: true }) trailer: ElementRef<HTMLVideoElement>;

  constructor() { }

  ngOnInit() {
  }

  playVideo() {
    if (this.trailer && this.trailer.nativeElement) {
      this.trailer.nativeElement.play();
    }
  }

  stopVideo() {
    this.trailer.nativeElement.currentTime = 0;
    this.trailer.nativeElement.pause();
  }

  areMuted(): boolean {
    return this.trailer.nativeElement.muted;
  }

  muteToggle() {
    this.trailer.nativeElement.muted = !this.trailer.nativeElement.muted;
  }
}

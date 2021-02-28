import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {

  @Input() title: string;
  @Input() list = [];

  constructor() { }

  ngOnInit() {
  }

}

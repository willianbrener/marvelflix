import { OnInit, Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar', // <app-nav-bar/>
  templateUrl: './nav-bar.compont.html', // Onde esta o html
  styleUrls: ['./nav-bar.compont.css'] // Estilo desse component
})
export class NavBarComponent implements OnInit {

  @Output() menuToggle: EventEmitter<boolean> = new EventEmitter();
  @Input() opened: boolean;

  constructor() { }

  ngOnInit(): void { }

  toggle() {
    this.opened = !this.opened;
    this.menuToggle.emit(this.opened);
  }
}

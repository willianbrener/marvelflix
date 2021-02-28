import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy, AfterViewInit {

  menuOpened: boolean;
  userName: string;

  constructor(private changeDetectorRef: ChangeDetectorRef) {

  }

  setMenuStage(state: boolean) {
    this.menuOpened = state;
  }

  closeMenu() {
    this.menuOpened = false;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
      this.changeDetectorRef.detectChanges();
  }

}

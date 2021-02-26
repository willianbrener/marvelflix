import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {BehaviorSubject} from 'rxjs';

import {Router} from '@angular/router';
import {LoadingService} from '../../core/services/loading.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy, AfterViewInit {

    mobileQuery: MediaQueryList;
    showSpinner: boolean;
    userName: string;
    isAdmin: boolean;

    constructor(private changeDetectorRef: ChangeDetectorRef,
                private media: MediaMatcher,
                public loadingService: LoadingService,
                private router: Router,
                /*private authGuard: AuthGuard*/) {

    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

    ngAfterViewInit(): void {
        this.changeDetectorRef.detectChanges();
    }

    logout() {
        this.router.navigate(['/auth/login']);
    }

    view(): BehaviorSubject<boolean> {
        return this.loadingService.visibility;
    }
}

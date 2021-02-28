import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LimitToPipe} from './pipes/limit-to.pipe';
import {LocalDatePipe} from './pipes/local-date.pipe';
import {YesNoPipe} from './pipes/yes-no.pipe';
import {LayoutComponent} from './layout/layout.component';
import {AppMaterialModule} from '../app-material.module';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './layout/footer/footer.component';
import {NavBarComponent} from './layout/nav-bar/nav-bar.component';

@NgModule({
  imports: [
    RouterModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CommonModule,
  ],
  declarations: [
    LayoutComponent,
    NavBarComponent,
    FooterComponent,
    LimitToPipe,
    LocalDatePipe,
    YesNoPipe,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppMaterialModule,
    LimitToPipe,
    LocalDatePipe,
    YesNoPipe,
  ],
  entryComponents: [
  ]
})
export class SharedModule { }

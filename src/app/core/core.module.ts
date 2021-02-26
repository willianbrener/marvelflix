import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMaterialModule } from '../app-material.module';
import { FooterComponent } from '../shared/layout/footer/footer.component';
import { HeaderComponent } from '../shared/layout/header/header.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class CoreModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeListComponent } from './home-list/home-list.component';
import {SharedModule} from '../../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';
import {BannerComponent} from '../../shared/components/banner/banner.component';
import {ComicListComponent} from '../../shared/components/comic-list/comic-list.component';
import {ComicComponent} from '../../shared/components/comic/comic.component';

@NgModule({
  declarations: [HomeListComponent, BannerComponent, ComicListComponent, ComicComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
})
export class HomeModule {}

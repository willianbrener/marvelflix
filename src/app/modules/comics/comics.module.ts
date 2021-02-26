import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import {SharedModule} from '../../shared/shared.module';
import {ComicsRoutingModule} from './comics-routing.module';

@NgModule({
  declarations: [ComicDetailComponent, ComicListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ComicsRoutingModule
  ],
})
export class ComicsModule {}

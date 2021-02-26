import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from 'src/app/shared/layout/layout.component';
import {ComicListComponent} from './comic-list/comic-list.component';
import {ComicDetailComponent} from './comic-detail/comic-detail.component';

const routes: Routes = [
  {
    path: 'detail/:id',
    component: LayoutComponent,
    children: [
      { path: '', component: ComicDetailComponent }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ComicListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }

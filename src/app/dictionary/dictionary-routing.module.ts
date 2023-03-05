import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DictionaryListPageComponent} from './dictionary-list-page/dictionary-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: DictionaryListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DictionaryRoutingModule { }

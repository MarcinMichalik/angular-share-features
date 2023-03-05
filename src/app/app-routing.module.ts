import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dictionary',
    loadChildren: () => import('./dictionary/dictionary.module').then(module => module.DictionaryModule),
  },
  {
    path: 'usage',
    loadChildren: () => import('./usage/usage.module').then(module => module.UsageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

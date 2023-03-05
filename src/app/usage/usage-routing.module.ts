import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsageFormPageComponent} from './usage-form-page/usage-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: UsageFormPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsageRoutingModule {
}

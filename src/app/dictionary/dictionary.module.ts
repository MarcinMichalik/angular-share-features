import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {TableModule} from 'primeng/table';
import {DictionaryListPageComponent} from './dictionary-list-page/dictionary-list-page.component';

import {DictionaryRoutingModule} from './dictionary-routing.module';
import {DictionarySharedModule} from './dictionary-shared/dictionary-shared.module';


@NgModule({
  declarations: [
    DictionaryListPageComponent,
  ],
  imports: [
    CommonModule,
    DictionaryRoutingModule,
    ButtonModule,
    RippleModule,
    TableModule,
    DictionarySharedModule
  ],
})
export class DictionaryModule {
}

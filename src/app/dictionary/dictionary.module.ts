import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {TableModule} from 'primeng/table';
import {DictionaryFormDialogComponent} from './dictionary-form-dialog/dictionary-form-dialog.component';
import {DictionaryListPageComponent} from './dictionary-list-page/dictionary-list-page.component';

import {DictionaryRoutingModule} from './dictionary-routing.module';


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
    DictionaryFormDialogComponent
  ],
})
export class DictionaryModule {
}

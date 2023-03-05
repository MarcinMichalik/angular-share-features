import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import {TableModule} from 'primeng/table';

import {DictionaryRoutingModule} from './dictionary-routing.module';
import {DictionaryListPageComponent} from './dictionary-list-page/dictionary-list-page.component';
import {DictionaryFormDialogComponent} from './dictionary-form-dialog/dictionary-form-dialog.component';
import {DictionaryService} from './service/dictionary.service';


@NgModule({
  declarations: [
    DictionaryListPageComponent,
    DictionaryFormDialogComponent
  ],
  imports: [
    CommonModule,
    DictionaryRoutingModule,
    ButtonModule,
    RippleModule,
    ReactiveFormsModule,
    InputTextModule,
    TableModule
  ],
  providers: [
    DictionaryService
  ]
})
export class DictionaryModule {
}

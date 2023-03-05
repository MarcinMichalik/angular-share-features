import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DictionaryFormDialogComponent} from './dictionary-form-dialog/dictionary-form-dialog.component';
import {DictionaryService} from './service/dictionary.service';



@NgModule({
  declarations: [
    DictionaryFormDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [
    DictionaryService
  ],
  exports: [
    DictionaryFormDialogComponent
  ]
})
export class DictionarySharedModule { }

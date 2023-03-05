import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import {DictionaryFormDialogComponent} from '../dictionary/dictionary-form-dialog/dictionary-form-dialog.component';
import {UsageFormPageComponent} from './usage-form-page/usage-form-page.component';

import {UsageRoutingModule} from './usage-routing.module';


@NgModule({
  declarations: [
    UsageFormPageComponent,
  ],
  imports: [
    CommonModule,
    UsageRoutingModule,
    ButtonModule,
    RippleModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    DictionaryFormDialogComponent
  ],
})
export class UsageModule {
}

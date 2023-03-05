import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import {DictionaryModule} from '../dictionary/dictionary.module';

import {UsageRoutingModule} from './usage-routing.module';
import {UsageFormPageComponent} from './usage-form-page/usage-form-page.component';


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
    DictionaryModule
  ],
})
export class UsageModule {
}

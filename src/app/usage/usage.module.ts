import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import {UsageService} from './service/usage.service';

import {UsageRoutingModule} from './usage-routing.module';
import {UsageFormPageComponent} from './usage-form-page/usage-form-page.component';
import {
  UsageDictionaryFormDialogComponent
} from './usage-dictionary-form-dialog/usage-dictionary-form-dialog.component';


@NgModule({
  declarations: [
    UsageFormPageComponent,
    UsageDictionaryFormDialogComponent
  ],
  imports: [
    CommonModule,
    UsageRoutingModule,
    ButtonModule,
    RippleModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule
  ],
  providers: [
    UsageService
  ]
})
export class UsageModule {
}

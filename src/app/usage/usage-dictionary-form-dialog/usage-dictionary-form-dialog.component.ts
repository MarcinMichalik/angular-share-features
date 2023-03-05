import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {DictionaryService} from '../../dictionary/service/dictionary.service';
import {UsageService} from '../service/usage.service';

@Component({
  selector: 'app-usage-dictionary-form-dialog',
  templateUrl: './usage-dictionary-form-dialog.component.html',
  styleUrls: ['./usage-dictionary-form-dialog.component.scss']
})
export class UsageDictionaryFormDialogComponent {

  dictionaryForm: FormGroup = this.buildDictionaryForm();
  saving = false;

  constructor(private formBuilder: FormBuilder,
              private usageService: UsageService,
              private ref: DynamicDialogRef,
              private config: DynamicDialogConfig) {
  }

  cancel() {
    this.ref.destroy();
  }

  save() {
    this.saving = true;
    if (this.dictionaryForm.invalid) {
      this.saving = false;
      this.dictionaryForm.markAllAsTouched();
      return;
    }

    this.usageService.save(this.dictionaryForm.getRawValue()).subscribe({
      next: value => {
        this.saving = false;
        this.ref.close(value);
      }
    })
  }

  private buildDictionaryForm(): FormGroup {
    return this.formBuilder.group({
      name: [{value: null, disabled: false}, Validators.required],
    })
  }

}

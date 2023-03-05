import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-form-dialog',
  templateUrl: './dictionary-form-dialog.component.html',
  styleUrls: ['./dictionary-form-dialog.component.scss']
})
export class DictionaryFormDialogComponent {

  dictionaryForm: FormGroup = this.buildDictionaryForm();
  saving = false;

  constructor(private formBuilder: FormBuilder,
              private dictionaryService: DictionaryService,
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

    this.dictionaryService.save(this.dictionaryForm.getRawValue()).subscribe({
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

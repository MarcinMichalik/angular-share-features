import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {UsageService} from '../service/usage.service';
import {
  UsageDictionaryFormDialogComponent
} from '../usage-dictionary-form-dialog/usage-dictionary-form-dialog.component';

@Component({
  selector: 'app-usage-form-page',
  templateUrl: './usage-form-page.component.html',
  styleUrls: ['./usage-form-page.component.scss'],
  providers: [
    DialogService
  ]
})
export class UsageFormPageComponent {

  usageForm: FormGroup = this.buildUsageForm();
  options: SelectItem[] = [];

  constructor(private formBuilder: FormBuilder,
              private usageService: UsageService,
              private dialogService: DialogService) {
    usageService.get().subscribe({
      next: value => this.options = (value || []).map((value: any) => ({value, label: value.name}))
    })
  }


  addItem() {
    const ref = this.dialogService.open(UsageDictionaryFormDialogComponent, {
      header: 'Add new item',
    });

    ref.onClose.subscribe(result => {
      if (result != null) {
        this.options.push({value: result, label: result.name});
        this.usageForm.reset({name: result});
      }
    })
  }

  private buildUsageForm(): FormGroup {
    return this.formBuilder.group({
      name: [{value: null, disabled: false}]
    })
  }
}

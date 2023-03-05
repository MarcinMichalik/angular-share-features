import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {DictionaryFormDialogComponent} from '../../dictionary/dictionary-shared/dictionary-form-dialog/dictionary-form-dialog.component';
import {DictionaryService} from '../../dictionary/dictionary-shared/service/dictionary.service';

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
              private dictionaryService: DictionaryService,
              private dialogService: DialogService) {
    dictionaryService.get().subscribe({
      next: value => this.options = (value || []).map((value: any) => ({value, label: value.name}))
    })
  }


  addItem() {
    const ref = this.dialogService.open(DictionaryFormDialogComponent, {
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

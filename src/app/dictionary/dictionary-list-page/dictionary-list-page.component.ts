import {Component} from '@angular/core';
import {LazyLoadEvent} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {DictionaryFormDialogComponent} from '../dictionary-form-dialog/dictionary-form-dialog.component';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-list-page',
  templateUrl: './dictionary-list-page.component.html',
  styleUrls: ['./dictionary-list-page.component.scss'],
  providers: [DialogService]
})
export class DictionaryListPageComponent {

  headers: any[] = [
    {field: 'name', header: 'name'},
  ];

  records: any[] = [];

  constructor(private dialogService: DialogService,
              private dictionaryService: DictionaryService) {
  }

  loadItems(event: LazyLoadEvent) {
    this.dictionaryService.get().subscribe({
      next: value => this.records = value,
    })
  }

  addItem() {
    const ref = this.dialogService.open(DictionaryFormDialogComponent, {
      header: 'Add new item'
    });
  }
}

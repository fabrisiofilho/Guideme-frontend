import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Item } from 'src/app/models/item';
import { StoreService } from 'src/app/services/store.service';
import { ToastMessageService } from 'src/app/services/toast-message.service';
import { FormStoreComponent } from '../form-store/form-store.component';

@Component({
  selector: 'app-table-store',
  templateUrl: './table-store.component.html',
  styleUrls: ['./table-store.component.scss']
})
export class TableStoreComponent implements OnInit {

  itens: Item[] = [];

  constructor(private storeService: StoreService,
    private dialogService: DialogService,
    private toastMessageService: ToastMessageService) {
    this.findItens()
  }

  ngOnInit(): void {
  }

  openForm() {
    const ref = this.dialogService.open(FormStoreComponent, {
        header: 'Formulario de item',
        width: '800px'
    });

    ref.onClose.subscribe(() => {
      this.findItens();
    });
  }

  findItens() {
    this.storeService.listItem().subscribe(it => {
      this.itens = it;
    });
  }

  deletarItem(id: number) {
    this.storeService.delete(id.toString()).subscribe(it => {
      this.findItens();
      this.toastMessageService.addSingle("success", "Sucesso", "Item deletado.");
    });
  }

  uploadItem(item: Item) {
    const ref = this.dialogService.open(FormStoreComponent, {
      header: 'Cadastrar novo item',
      width: '800px',
      data: {
        item: item
      }
    });

    ref.onClose.subscribe(() => {
      this.findItens();
    });
  }

}

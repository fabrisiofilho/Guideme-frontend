import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { StoreService } from 'src/app/services/store.service';
import { ToastMessageService } from 'src/app/services/toast-message.service';

@Component({
  selector: 'app-form-store',
  templateUrl: './form-store.component.html',
  styleUrls: ['./form-store.component.scss']
})
export class FormStoreComponent implements OnInit {

  itemsForm: FormGroup;

  constructor(formBuilder: FormBuilder,
              private storeService: StoreService,
              private toastMessageService: ToastMessageService,
              private config: DynamicDialogConfig,
              public ref: DynamicDialogRef) {
    if (this.config.data?.item) {
      const item = this.config.data.item;
      this.itemsForm = formBuilder.group({
        id: [item.id, [Validators.required]],
        title: [item.title, [Validators.required]],
        price: [item.price, [Validators.required]],
        value: [item.value, [Validators.required]],
        category: [item.category, [Validators.required]]
      });
    } else {
      this.itemsForm = formBuilder.group({
        title: [null, [Validators.required]],
        price: [null, [Validators.required]],
        value: [null, [Validators.required]],
        category: [null, [Validators.required]]
      });
    }
  }

  register() {
    const item = this.itemsForm.getRawValue();
    if (this.itemsForm.valid) {
      this.storeService.create(item).subscribe(it => {
        this.toastMessageService.addSingle("success", "Sucesso", "Novo item foi cadastrado.");
        this.ref.close();
      });
    }
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Challenger } from 'src/app/models/challenger';
import { ChallengerService } from 'src/app/services/challenger.service';
import { ToastMessageService } from 'src/app/services/toast-message.service';

@Component({
  selector: 'app-form-challenger',
  templateUrl: './form-challenger.component.html',
  styleUrls: ['./form-challenger.component.scss']
})
export class FormChallengerComponent implements OnInit {

  challengerForm: FormGroup;

  constructor(private toastMessageService: ToastMessageService,
              private config: DynamicDialogConfig,
              public ref: DynamicDialogRef,
              formBuilder: FormBuilder,
              private challengerService: ChallengerService) {
    if (this.config.data?.challenger) {
      const item = this.config.data.challenger;
      this.challengerForm = formBuilder.group({
        id: [item.id, [Validators.required]],
        bountyCoin: [item.bountyCoin, [Validators.required]],
        bountyXp: [item.bountyXp, [Validators.required]],
        points: [item.points, [Validators.required]],
        question: [item.question, [Validators.required]],
        result: [item.result, [Validators.required]],
        title: [item.title, [Validators.required]]
      });
    } else {
      this.challengerForm = formBuilder.group({
        bountyCoin: [null, [Validators.required]],
        bountyXp: [null, [Validators.required]],
        points: [null, [Validators.required]],
        question: [null, [Validators.required]],
        result: [null, [Validators.required]],
        title: [null, [Validators.required]]
      });
    }
  }

  ngOnInit(): void {
  }

  register() {
    const item = this.challengerForm.getRawValue();
    if (this.challengerForm.valid) {
      this.challengerService.create(item).subscribe(it => {
        this.toastMessageService.addSingle("success", "Sucesso", "Novo desafio foi cadastrado.");
        this.ref.close();
      });
    }
  }

}
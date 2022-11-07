import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Challenger } from 'src/app/models/challenger';
import { ChallengerService } from 'src/app/services/challenger.service';
import { ToastMessageService } from 'src/app/services/toast-message.service';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.scss']
})
export class ValidationsComponent implements OnInit {

  validationForm: FormGroup;

  challenger: Challenger;

  listQuestion: any[] = [];

  constructor(formBuilder: FormBuilder,
              private toastMessage: ToastMessageService,
              private challengerService: ChallengerService,
              public ref: DynamicDialogRef,
              public config: DynamicDialogConfig) {
    this.challenger = config.data.challenger;
    this.validationForm = formBuilder.group({
      pergunta: [{value: this.challenger.question, disabled: true}, [Validators.required]],
      resposta: [null, [Validators.required]],
    });

    this.listQuestion = this.randomOptions(this.challenger?.result, this.challenger?.options);
  }

  ngOnInit(): void {
  }

  validar() {
    if(this.validationForm.valid) {
      let form = this.validationForm.getRawValue()
      this.challengerService.validation({id: this.challenger.id,response: form.resposta}).subscribe({
        next: (it)=> {
          this.toastMessage.addSingle("success", "Sucesso", "Desafio concluido.");
          this.ref.close();
        },
        error: e => {
          this.toastMessage.addSingle("error", "Erro", "Resposta errado.");
          this.ref.close();
        }
      });
    }
  }

  randomOptions(right: string | undefined, options: string | undefined) {
    let list = options!.split(";");
    list.push(right!);
    return this.shuffleArray(list);
  }

  shuffleArray(arr: any[]) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

}

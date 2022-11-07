import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { Step } from 'src/app/models/step';
import { RoadmapService } from 'src/app/services/roadmap.service';
import { ToastMessageService } from 'src/app/services/toast-message.service';

@Component({
  selector: 'app-roadmap-validate',
  templateUrl: './roadmap-validate.component.html',
  styleUrls: ['./roadmap-validate.component.scss']
})
export class RoadmapValidateComponent implements OnInit {

  step?: Step;

  validateForm!: FormGroup;

  listQuestion1: any[] = [];
  listQuestion2: any[] = [];
  listQuestion3: any[] = [];
  listQuestion4: any[] = [];
  listQuestion5: any[] = [];

  constructor(private roadmapService: RoadmapService,
              private formBuilder: FormBuilder,
              private toastMessage: ToastMessageService,
              private route: ActivatedRoute,
              private router: Router) {
              this.validateForm = this.formBuilder.group({});
            }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.roadmapService.findQuestionsById(id).subscribe(it => {
        this.step = it;
        this.createForm();
      });
    }
  }

  createForm() {
    this.validateForm = this.formBuilder.group({
      id: [this.step?.questions.id],
      questionOne: [{value: this.step?.questions.questionOne, disabled: true}, [Validators.required]],
      responseOne: [null, [Validators.required]],
      questionTwo: [{value: this.step?.questions.questionTwo , disabled: true}, [Validators.required]],
      responseTwo: [null, [Validators.required]],
      questionThree: [{value: this.step?.questions.questionThree, disabled: true}, [Validators.required]],
      responseThree: [null, [Validators.required]],
      questionFour: [{value: this.step?.questions.questionFour , disabled: true}, [Validators.required]],
      responseFour: [null, [Validators.required]],
      questionFive: [{value: this.step?.questions.questionFive, disabled: true}, [Validators.required]],
      responseFive: [null, [Validators.required]],
      stepId: [this.step?.id, [Validators.required]]
    });

    this.listQuestion1 = this.randomOptions(this.step?.questions?.responseOne, this.step?.questions?.optionsOne);
    this.listQuestion2 = this.randomOptions(this.step?.questions?.responseTwo, this.step?.questions?.optionsTwo);
    this.listQuestion3 = this.randomOptions(this.step?.questions?.responseThree, this.step?.questions?.optionsThree);
    this.listQuestion4 = this.randomOptions(this.step?.questions?.responseFour, this.step?.questions?.optionsFour);
    this.listQuestion5 = this.randomOptions(this.step?.questions?.responseFive, this.step?.questions?.optionsFive);

  }

  validar() {
    if (this.validateForm.valid) {
      const value = this.validateForm.getRawValue();
      this.roadmapService.validate(value).subscribe({
        next:(it) => {
          this.toastMessage.addSingle("success", "Sucesso", "Parabéns ao concluir o module:" + this.step?.title);
          this.router.navigate(['/roadmap']);
        },
        error:() => {
          this.toastMessage.addSingle("error", "Erro", "Tente novamente, há respostas incorretas.");
        }}
      );
    }
  }

  voltar() {
    this.router.navigate(['/roadmap']);
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


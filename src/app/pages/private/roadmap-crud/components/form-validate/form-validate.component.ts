import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Step } from 'src/app/models/step';
import { RoadmapService } from 'src/app/services/roadmap.service';

@Component({
  selector: 'app-form-validate',
  templateUrl: './form-validate.component.html',
  styleUrls: ['./form-validate.component.scss']
})
export class FormValidateComponent implements OnInit {

  validateForm: FormGroup;

  constructor(private config: DynamicDialogConfig,
              private ref: DynamicDialogRef,
              formBuilder: FormBuilder,
              private roadmapService: RoadmapService) {
    const item: Step = this.config.data.step;
    console.log(item.questions);
    if (item.questions) {
      this.validateForm = formBuilder.group({
        id: [item.questions.id],
        questionOne: [item.questions.questionOne, [Validators.required]],
        responseOne: [item.questions.responseOne, [Validators.required]],
        questionTwo: [item.questions.questionTwo, [Validators.required]],
        responseTwo: [item.questions.responseTwo, [Validators.required]],
        questionThree: [item.questions.questionThree, [Validators.required]],
        responseThree: [item.questions.responseThree, [Validators.required]],
        questionFour: [item.questions.questionFour, [Validators.required]],
        responseFour: [item.questions.responseFour, [Validators.required]],
        questionFive: [item.questions.questionFive, [Validators.required]],
        responseFive: [item.questions.responseFive, [Validators.required]],
        stepId: [item.id, [Validators.required]],
      });
    } else {
      this.validateForm = formBuilder.group({
        questionOne: [null, [Validators.required]],
        responseOne: [null, [Validators.required]],
        questionTwo: [null, [Validators.required]],
        responseTwo: [null, [Validators.required]],
        questionThree: [null, [Validators.required]],
        responseThree: [null, [Validators.required]],
        questionFour: [null, [Validators.required]],
        responseFour: [null, [Validators.required]],
        questionFive: [null, [Validators.required]],
        responseFive: [null, [Validators.required]],
        stepId: [item.id, [Validators.required]],
      });
    }
  }

  ngOnInit(): void {
  }

  register() {
    if (this.validateForm.valid) {
      const content = this.validateForm.getRawValue();
      this.roadmapService.addContent(content).subscribe(it => {
        this.ref.close(it);
      });
    }
  }

}

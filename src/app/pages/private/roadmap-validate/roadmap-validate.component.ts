import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Step } from 'src/app/models/step';
import { RoadmapService } from 'src/app/services/roadmap.service';

@Component({
  selector: 'app-roadmap-validate',
  templateUrl: './roadmap-validate.component.html',
  styleUrls: ['./roadmap-validate.component.scss']
})
export class RoadmapValidateComponent implements OnInit {

  step?: Step;

  validateForm!: FormGroup;

  constructor(private roadmapService: RoadmapService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
                this.createForm();
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
  }

  validar() {
    if (this.validateForm.valid) {
      const value = this.validateForm.getRawValue();
      this.roadmapService.validate(value).subscribe(it => {
        console.log("Validou");
        this.router.navigate(['/roadmap']);
      });
    }
  }

  voltar() {
    this.router.navigate(['/roadmap']);
  }

}

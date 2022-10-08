import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Layer } from '@fortawesome/fontawesome-svg-core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Content } from 'src/app/models/content';
import { Step } from 'src/app/models/step';
import { RoadmapService } from 'src/app/services/roadmap.service';
import { TableContentComponent } from '../table-content/table-content.component';

@Component({
  selector: 'app-form-roadmap',
  templateUrl: './form-roadmap.component.html',
  styleUrls: ['./form-roadmap.component.scss']
})
export class FormRoadmapComponent implements OnInit {

  @ViewChild('table')
  contents?: TableContentComponent;

  stepForm: FormGroup;

  content: Content[] = [];

  constructor(private config: DynamicDialogConfig,
              private ref: DynamicDialogRef,
              formBuilder: FormBuilder,
              private roadmapService: RoadmapService) {
    if (this.config.data?.step) {
      const item = this.config.data.step;
      this.content = item.contents;
      console.log(item.contents)
      this.stepForm = formBuilder.group({
        id: [item.id, [Validators.required]],
        title: [item.title, [Validators.required]],
        bountyCoin: [item.bountyCoin, [Validators.required]],
        bountyXp: [item.bountyXp, [Validators.required]],
        difficulty: [item.difficulty, [Validators.required]],
        idLayer: [item.idLayer, [Validators.required]],
        contents: [item.contents]
      });
    } else  {
      const layerId = this.config.data.layerId;
      this.stepForm = formBuilder.group({
        title: [null, [Validators.required]],
        bountyCoin: [null, [Validators.required]],
        bountyXp: [null, [Validators.required]],
        difficulty: [null, [Validators.required]],
        idLayer: [layerId, [Validators.required]],
        contents: [null]
      });
    }
  }

  ngOnInit(): void {
  }

  register() {
    const item: Step = this.stepForm.getRawValue();
    if (this.stepForm.valid) {
      item.contents = this.contents!.content;
      this.roadmapService.addStep(item).subscribe(it => {
        this.ref.close(it);
      });
    }
  }

}

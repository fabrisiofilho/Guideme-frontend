import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Step } from 'src/app/models/step';

@Component({
  selector: 'app-step-roadmap',
  templateUrl: './step-roadmap.component.html',
  styleUrls: ['./step-roadmap.component.scss']
})
export class StepRoadmapComponent implements OnInit {

  step: Step;

  constructor(public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private sanitizer: DomSanitizer) {
    this.step = config.data.step;
  }

  ngOnInit(): void {
  }

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

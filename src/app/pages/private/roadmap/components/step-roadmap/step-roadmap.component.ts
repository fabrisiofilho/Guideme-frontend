import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Step } from 'src/app/models/step';

@Component({
  selector: 'app-step-roadmap',
  templateUrl: './step-roadmap.component.html',
  styleUrls: ['./step-roadmap.component.scss']
})
export class StepRoadmapComponent implements OnInit {

  visibleSidebar = false;

  step: Step;

  constructor(public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private sanitizer: DomSanitizer,
    private router: Router) {
    this.step = config.data.step;
  }

  ngOnInit(): void {
  }

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  openWindow(url:string) {
    window.open(url);
  }

  openValidation() {
    this.ref.close(this.step);
  }

}

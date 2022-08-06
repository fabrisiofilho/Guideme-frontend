import { Component, OnInit } from '@angular/core';

import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'add-step',
  templateUrl: './add-step.component.html',
  styleUrls: ['./add-step.component.scss']
})
export class AddStepComponent implements OnInit {

  faPlus = faPlus;

  size: SizeProp = "lg";

  constructor() { }

  ngOnInit(): void {
  }

}

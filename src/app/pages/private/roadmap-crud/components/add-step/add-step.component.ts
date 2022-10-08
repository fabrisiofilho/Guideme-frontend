import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { DialogService } from 'primeng/dynamicdialog';
import { Layer } from 'src/app/models/layer';
import { Roadmap } from 'src/app/models/roadmap';
import { RoadmapService } from 'src/app/services/roadmap.service';
import { FormRoadmapComponent } from '../form-roadmap/form-roadmap.component';

@Component({
  selector: 'add-step',
  templateUrl: './add-step.component.html',
  styleUrls: ['./add-step.component.scss']
})
export class AddStepComponent implements OnInit {

  faPlus = faPlus;

  size: SizeProp = "lg";

  @Output()
  addLayerEvent = new EventEmitter<Roadmap>();

  constructor(private roadmapService: RoadmapService) { }

  ngOnInit(): void {
  }

  addLayer() {
    const layer: Layer = {
      id: 0,
      idRoadmap: 1,
      steps: []
    }
    this.roadmapService.addLayers(layer).subscribe(it => {
      this.addLayerEvent.emit(it);
    });
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

import { faCoins, faFeatherPointed, faLayerGroup, faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Roadmap } from 'src/app/models/roadmap';
import { RoadmapService } from 'src/app/services/roadmap.service';


@Component({
  selector: 'creater-roadmap',
  templateUrl: './creater-roadmap.component.html',
  styleUrls: ['./creater-roadmap.component.scss']
})
export class CreaterRoadmapComponent implements OnInit {

  faTrash = faTrash;
  faPencil = faPencil;
  faPlus = faPlus;
  faCoins = faCoins;
  faFeatherPointed = faFeatherPointed;
  faLayerGroup = faLayerGroup;
  size: SizeProp = "sm";

  @Input()
  roadmap: Roadmap | undefined;

  constructor(private roadmapService: RoadmapService) { }

  ngOnInit(): void {
  }

  deleteStep(id: number) {
    this.roadmapService.deleteStepById(id.toString()).subscribe(it => {
      this.roadmap = it;
    });
  }

}

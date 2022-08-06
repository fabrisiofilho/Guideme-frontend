import { Component, OnInit } from '@angular/core';
import { Roadmap } from 'src/app/models/roadmap';
import { RoadmapService } from 'src/app/services/roadmap.service';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {

  roadmap?: Roadmap;

  constructor(private roadmapService: RoadmapService) {
    this.getRoadmap();
  }

  ngOnInit(): void {
  }

  getRoadmap() {
    this.roadmapService.findById("1").subscribe(it => {
      this.roadmap = it;
      this.roadmap?.step.sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      });
    });
  }

}

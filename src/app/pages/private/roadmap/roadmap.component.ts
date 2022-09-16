import { Component, OnInit } from '@angular/core';
import { Roadmap } from 'src/app/models/roadmap';
import { RoadmapService } from 'src/app/services/roadmap.service';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {

  loading: boolean = true;

  roadmap?: Roadmap;

  constructor(private roadmapService: RoadmapService) {
    this.getRoadmap();
  }

  ngOnInit(): void {
  }

  getRoadmap() {
    this.roadmapService.findById().subscribe(it => {
      this.roadmap = it;
      this.roadmap?.layers.sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      });
      this.loading = false;
    });
  }

}

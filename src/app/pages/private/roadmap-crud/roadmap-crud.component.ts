import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Roadmap } from 'src/app/models/roadmap';
import { RoadmapService } from 'src/app/services/roadmap.service';

@Component({
  selector: 'app-roadmap-crud',
  templateUrl: './roadmap-crud.component.html',
  styleUrls: ['./roadmap-crud.component.scss']
})
export class RoadmapCrudComponent implements OnInit {

  roadmap?: Roadmap;

  constructor(private roadmapService: RoadmapService) {
  }

  ngOnInit(): void {
    this.roadmapService.findById().subscribe(it => {
      this.roadmap = it;
    });
  }

  deleteById(id: string) {
    this.roadmapService.deleteById(id).subscribe(it => {
    });
  }

  attRoadmap(roadmap: Roadmap) {
    this.roadmap = roadmap;
  }

}

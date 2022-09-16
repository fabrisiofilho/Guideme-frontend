import { Component, OnInit } from '@angular/core';
import { Roadmap } from 'src/app/models/roadmap';
import { RoadmapService } from 'src/app/services/roadmap.service';

@Component({
  selector: 'app-roadmap-crud',
  templateUrl: './roadmap-crud.component.html',
  styleUrls: ['./roadmap-crud.component.scss']
})
export class RoadmapCrudComponent implements OnInit {

  roadmap: Roadmap | undefined;

  constructor(private roadmapService: RoadmapService) {
    this.roadmapService.findById().subscribe(it => {
      this.roadmap = it;
    });
  }

  ngOnInit(): void {
  }

  deleteById(id: string) {
    this.roadmapService.deleteById(id).subscribe(it => {
    });
  }

}

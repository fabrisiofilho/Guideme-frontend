import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { Roadmap } from 'src/app/models/roadmap';

@Component({
  selector: 'system-roadmap',
  templateUrl: './system-roadmap.component.html',
  styleUrls: ['./system-roadmap.component.scss']
})
export class SystemRoadmapComponent implements OnInit {

  @Input()
  roadmap!: Roadmap;

  faPersonDigging = faPersonDigging;

  size: SizeProp = "2x";

  constructor() { }

  ngOnInit(): void {
  }



}

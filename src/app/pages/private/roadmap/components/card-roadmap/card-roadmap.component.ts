import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleCheck, faCoins, faFeatherPointed, faLock} from '@fortawesome/free-solid-svg-icons';
import { Step } from 'src/app/models/step';

@Component({
  selector: 'card-roadmap',
  templateUrl: './card-roadmap.component.html',
  styleUrls: ['./card-roadmap.component.scss']
})
export class CardRoadmapComponent implements OnInit {

  @Input()
  step!: Step;

  faFeatherPointe = faFeatherPointed;
  faCoins = faCoins;
  faLock = faLock;
  faCircleCheck = faCircleCheck;
  size: SizeProp = 'sm';
  size2: SizeProp = '2x';

  constructor() { }

  ngOnInit(): void {
  }

}

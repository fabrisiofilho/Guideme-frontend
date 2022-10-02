import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-little-card',
  templateUrl: './little-card.component.html',
  styleUrls: ['./little-card.component.scss']
})
export class LittleCardComponent implements OnInit {

  sizeSm: SizeProp = "2x";

  @Input()
  icon: any;

  @Input()
  text: any;


  constructor() { }

  ngOnInit(): void {
  }

}

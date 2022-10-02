import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'guideme-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  item: any;

  @Input()
  icon: any;

  @Input()
  buttonText?: string;

  @Output()
  clickButton = new EventEmitter<any>();

  size: SizeProp = "sm";

  constructor() { }

  ngOnInit(): void {
  }

}

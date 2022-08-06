import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input()
  title!: string;

  @Output()
  search = new EventEmitter<string>();

  @Input()
  icon: any;

  @Input()
  value?: number;

  query: string = "";

  size: SizeProp = "sm";

  constructor() { }

  ngOnInit(): void {
  }

}

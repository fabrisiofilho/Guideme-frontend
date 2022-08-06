import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input()
  itens: any[] = []

  @Input()
  icon: any;

  @Input()
  buttonText?: string;

  size: SizeProp = "sm";

  constructor() { }

  ngOnInit(): void {
  }

}

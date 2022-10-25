import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Content } from 'src/app/models/content';
import { RoadmapService } from 'src/app/services/roadmap.service';

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss']
})
export class TableContentComponent implements OnInit {

  @Input()
  content: Content[] = [];

  faTrash = faTrash;
  size: SizeProp = "sm";

  contentForm!: FormGroup;

  constructor(formBuilder: FormBuilder,
              private roadmapService: RoadmapService) {
    this.contentForm = formBuilder.group({
      id: [null],
      title: [null, [Validators.required]],
      payload: [null, [Validators.required]],
      urlVideo: [null],
      linkOne: [null],
      linkTwo: [null],
      linkTree: [null]
    });
  }

  ngOnInit(): void {
  }

  register() {
    const item: Content = this.contentForm.getRawValue();
    if (this.contentForm.valid) {
      this.content.push(item);
    }
  }

  deleteContent(content: Content) {
    this.content.splice(this.content.indexOf(content), 1);
  }

}

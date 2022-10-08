import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Layer, SizeProp } from '@fortawesome/fontawesome-svg-core';

import { faCoins, faFeatherPointed, faFile, faLayerGroup, faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { DialogService } from 'primeng/dynamicdialog';

import { Roadmap } from 'src/app/models/roadmap';
import { RoadmapService } from 'src/app/services/roadmap.service';
import { FormRoadmapComponent } from '../form-roadmap/form-roadmap.component';
import { FormValidateComponent } from '../form-validate/form-validate.component';


@Component({
  selector: 'creater-roadmap',
  templateUrl: './creater-roadmap.component.html',
  styleUrls: ['./creater-roadmap.component.scss']
})
export class CreaterRoadmapComponent implements OnInit {

  faTrash = faTrash;
  faPencil = faPencil;
  faPlus = faPlus;
  faFile = faFile;
  faCoins = faCoins;
  faFeatherPointed = faFeatherPointed;
  faLayerGroup = faLayerGroup;
  size: SizeProp = "sm";

  @Output()
  attRoadmap = new EventEmitter<Roadmap>();


  @Input()
  roadmap: Roadmap | undefined;

  constructor(private roadmapService: RoadmapService,
              private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  deleteStep(id: number) {
    this.roadmapService.deleteStepById(id.toString()).subscribe(it => {
      this.roadmap = it;
    });
  }

  deleteLayer(id: number) {
    this.roadmapService.deleteLayerById(id.toString()).subscribe(it => {
      this.roadmap = it;
    });
  }

  openAddStep(layerId: number) {
    const ref = this.dialogService.open(FormRoadmapComponent, {
      data: {
        layerId: layerId
      },
      header: 'Adicionar etapas',
      width: '50%',
      height: '90%'
    });

    ref.onClose.subscribe(it => {
      if (it) {
        this.attRoadmap.emit(it);
      }
    });
  }

  openUpdateStep(step: any) {
    const ref = this.dialogService.open(FormRoadmapComponent, {
      data: {
        step: step
      },
      header: 'Adicionar etapas',
      width: '50%',
      height: '90%'
    });
    ref.onClose.subscribe(it => {
      if (it) {
        this.attRoadmap.emit(it);
      }
    });
  }

  formValidate(step: any) {
    const ref = this.dialogService.open(FormValidateComponent, {
      data: {
        step: step
      },
      header: 'Adicionar Validação de Module',
      width: '50%',
      height: '90%'
    });
    ref.onClose.subscribe(it => {
      if (it) {
        this.attRoadmap.emit(it);
      }
    });
  }

}

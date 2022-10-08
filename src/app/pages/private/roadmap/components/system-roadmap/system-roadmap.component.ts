import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Roadmap } from 'src/app/models/roadmap';
import { Step } from 'src/app/models/step';
import { ToastMessageService } from 'src/app/services/toast-message.service';
import { StepRoadmapComponent } from '../step-roadmap/step-roadmap.component';

@Component({
  selector: 'system-roadmap',
  templateUrl: './system-roadmap.component.html',
  styleUrls: ['./system-roadmap.component.scss']
})
export class SystemRoadmapComponent implements OnInit {

  @Input()
  roadmap!: Roadmap;

  @Output()
  validatationEvent = new EventEmitter<Step>;

  faPersonDigging = faPersonDigging;

  size: SizeProp = "2x";

  constructor(private messageService: ToastMessageService,
              private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  openStep(event: Step) {
    if (event.isOpen || event.isDone) {
      this.messageService.clear();
      const ref = this.dialogService.open(StepRoadmapComponent, {
        data: {
          step: event
        },
        header: event.title,
        width: '70%',
        height: '80%'
      });
      ref.onClose.subscribe(it => {
        this.validatationEvent?.emit(it);
      });
      return;
    }
    this.messageService.addSingle("info", "Info", "Está etapa ainda está bloqueada para você, conclua as anteriores para pode acessar.");
  }

}

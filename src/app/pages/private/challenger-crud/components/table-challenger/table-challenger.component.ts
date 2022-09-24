import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Challenger } from 'src/app/models/challenger';
import { ChallengerService } from 'src/app/services/challenger.service';
import { ToastMessageService } from 'src/app/services/toast-message.service';
import { FormChallengerComponent } from '../form-challenger/form-challenger.component';

@Component({
  selector: 'app-table-challenger',
  templateUrl: './table-challenger.component.html',
  styleUrls: ['./table-challenger.component.scss']
})
export class TableChallengerComponent implements OnInit {

  challengers: Challenger[] = [];

  constructor(private challengerService: ChallengerService,
              private dialogService: DialogService,
              private toastMessageService: ToastMessageService) {
    this.findChallenger();
  }

  ngOnInit(): void {
  }

  findChallenger() {
    this.challengerService.getList().subscribe(it => {
      this.challengers = it;
    })
  }

  openForm() {
    const ref = this.dialogService.open(FormChallengerComponent, {
        header: 'Formulario de desafio',
        width: '800px'
    });

    ref.onClose.subscribe(() => {
      this.findChallenger();
    });
  }

  editChallenger(challenger: Challenger) {
    const ref = this.dialogService.open(FormChallengerComponent, {
      header: 'Formulario de desafio',
      width: '800px',
      data: {
        challenger: challenger
      }
    });

    ref.onClose.subscribe(() => {
      this.findChallenger();
    });
  }

  removerChallenger(id: number) {
    this.challengerService.delete(id.toString()).subscribe(it => {
      this.findChallenger();
      this.toastMessageService.addSingle("success", "Sucesso", "Desafio deletado.");
    });
  }

}

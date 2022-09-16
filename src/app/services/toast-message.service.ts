import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  constructor(private messageService: MessageService) { }

  addSingle(severity: string, summary: string, detail: string) {
    this.clear();
    this.messageService.add({severity:severity, summary:summary, detail:detail});
  }

  clear() {
    this.messageService.clear();
  }

}

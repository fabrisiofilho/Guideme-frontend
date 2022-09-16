import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faBell, faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from 'primeng/api';
import { Notifications } from 'src/app/models/notifications';

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  faBell = faBell;
  faEnvelope = faEnvelope;
  faXmark = faXmark;
  size: SizeProp = "lg";

  zero: number = 0;

  isMenuOpen = false;

  notifications: Notifications[] = [];

  constructor() {
  }

  ngOnInit(): void {
    const nots: Notifications = {
      id: 1,
      title: 'Novo desafio adicionado 1',
      type: 'Desafios'
    }
    const nots2: Notifications = {
      id: 2,
      title: 'Novo desafio adicionado 2',
      type: 'Desafios'
    }
    this.notifications.push(nots)
    this.notifications.push(nots2)
  }

  validIndex(i: number) {
    return i>0;
  }

  closeNoteficaiton(notefication: Notifications) {
    this.notifications.splice(this.notifications.indexOf(notefication), 1);
    console.log(this.notifications);
  }

}

import { Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faBell, faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from 'primeng/api';
import { Notifications } from 'src/app/models/notifications';
import { UserService } from 'src/app/services/user.service';

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

  notifications?: Notifications[];

  constructor(private userService: UserService) {
    this.findNotification();
  }

  ngOnInit(): void {
  }

  validIndex(i: number) {
    return i>0;
  }

  closeNoteficaiton(notefication: Notifications) {
    this.notifications?.splice(this.notifications.indexOf(notefication), 1);
    this.userService.setReadNotification(notefication.id).subscribe(it => {

    });
  }


  findNotification() {
    this.userService.getNotification().subscribe(it => {
      this.notifications = it
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/security/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {

  user!: User;

  size: SizeProp = "sm";

  faFeatherPointed = faFeatherPointed;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const email = localStorage.getItem("user_email");
    if(email) {
      this.userService.findUserByEmail(email).subscribe(it => {
        this.user = it;
      });
    }
  }

}

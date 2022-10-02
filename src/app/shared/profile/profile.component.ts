import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Challenger } from 'src/app/models/challenger';
import { Item } from 'src/app/models/item';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [DialogService]
})
export class ProfileComponent implements OnInit {

  items: Item[] = [];

  challenger: Challenger[] = [];

  email: string | null;

  constructor(private userService: UserService) {
    this.email = localStorage.getItem("user_email");
  }
  ngOnInit(): void {
    this.findUserTakeItens();
    this.findChallengerByUser();
  }

  findUserTakeItens() {
    if (this.email) {
      this.userService.findUserByEmail(this.email).subscribe((it)=> {
        this.items = it.inventory.items;
      });
    }
  }

  findChallengerByUser() {
    if (this.email) {
      this.userService.findChallengerByUser().subscribe((it)=> {
        this.challenger = it;
      });
    }
  }

}

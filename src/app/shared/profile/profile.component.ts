import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
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

  constructor(private userService: UserService) {
    this.findUserTakeItens();
  }
  ngOnInit(): void {
    this.userService.findUserByEmail
  }

  findUserTakeItens() {
    let email = localStorage.getItem("user_email");
    if (email) {
      this.userService.findUserByEmail(email).subscribe((it)=> {
        this.items = it.inventory.items;
      });
    }
  }

}

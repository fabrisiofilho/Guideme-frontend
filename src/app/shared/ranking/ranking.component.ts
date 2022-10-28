import { Component, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';
import { DialogService } from 'primeng/dynamicdialog';
import { User } from 'src/app/security/models/user';
import { RankingService } from 'src/app/services/ranking.service';
import { UserService } from 'src/app/services/user.service';
import { TotalRankingComponent } from '../total-ranking/total-ranking.component';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  faFeatherPointed = faFeatherPointed;
  sizeSm: SizeProp = "sm";
  users: User[] = [];
  userIn?: User;

  constructor(public dialogService: DialogService,
              private rankingService: RankingService,
              private userService: UserService) {
                this.getUser();
              }

  ngOnInit(): void {
    this.rankingService.get().subscribe(it => {
      this.users = it;
    });
  }

  getUser(){
    const email = localStorage.getItem("user_email");
    if (email) {
      this.userService.findUserByEmail(email).subscribe(it => {
        this.userIn = it;
      });
    }
  }

  openTotalRanking() {
    const ref = this.dialogService.open(TotalRankingComponent, {
      data: {
        userIn: this.userIn
      },
      header: 'Ranking',
      width: '500px'
    });
  }

  photo() {
    if (localStorage.getItem("photo")) {
      return localStorage.getItem("photo");
    }
    return 'https://s3.amazonaws.com/sample-login/users/avatars/blank_avatar.png';
  }


}

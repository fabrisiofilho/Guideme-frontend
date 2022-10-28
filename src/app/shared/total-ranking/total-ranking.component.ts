import { Component, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { User } from 'src/app/security/models/user';
import { RankingService } from 'src/app/services/ranking.service';

@Component({
  selector: 'app-total-ranking',
  templateUrl: './total-ranking.component.html',
  styleUrls: ['./total-ranking.component.scss']
})
export class TotalRankingComponent implements OnInit {

  faFeatherPointed = faFeatherPointed;
  sizeSm: SizeProp = "sm";
  users: User[] = [];

  userIn: User;

  constructor(private rankingService: RankingService,
              public ref: DynamicDialogRef,
              public config: DynamicDialogConfig) {
                this.userIn = config.data.userIn;
              }

  ngOnInit(): void {
    this.rankingService.get().subscribe(it => {
      this.users = it;
    });
  }

  photo(stringurl: string) {
    if (stringurl) {
      return stringurl;
    }
    return 'https://s3.amazonaws.com/sample-login/users/avatars/blank_avatar.png';
  }

}

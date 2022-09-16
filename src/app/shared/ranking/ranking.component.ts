import { Component, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';
import { DialogService } from 'primeng/dynamicdialog';
import { User } from 'src/app/security/models/user';
import { RankingService } from 'src/app/services/ranking.service';
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

  constructor(public dialogService: DialogService,
              private rankingService: RankingService) { }

  ngOnInit(): void {
    this.rankingService.get().subscribe(it => {
      this.users = it;
    });
  }

  photo() {
    return localStorage.getItem("photo");
  }

  openTotalRanking() {
    const ref = this.dialogService.open(TotalRankingComponent, {
      header: 'Ranking',
      width: '500px'
    });
  }



}

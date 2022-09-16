import { Component, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';
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

  constructor(private rankingService: RankingService) { }

  ngOnInit(): void {
    this.rankingService.get().subscribe(it => {
      this.users = it;
    });
  }

}

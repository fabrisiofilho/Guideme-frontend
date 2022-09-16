import { Component, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';
import { Challenger } from 'src/app/models/challenger';
import { Pageable } from 'src/app/models/pageable';
import { ChallengerService } from 'src/app/services/challenger.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-challenger',
  templateUrl: './challenger.component.html',
  styleUrls: ['./challenger.component.scss']
})
export class ChallengerComponent implements OnInit {

  faFeatherPointed = faFeatherPointed;
  size: SizeProp = "sm";
  itens?: Pageable<Challenger>;
  item: Challenger[] = [];
  vendinha: string = "vendinha";
  text: string = "Realizar";

  value!: number;

  constructor(private challengerService: ChallengerService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.buscarItens("");
    this.buscarCoins();
  }

  buscarItens(query: string) {
    this.challengerService.search(query).subscribe(it => {
      this.itens = it;
      this.item = it.content
    });
  }

  buscarCoins() {
    const email = localStorage.getItem("user_email");
    if (email) {
      this.userService.findUserByEmail(email).subscribe(it => {
        this.value = it.points;
      });
    }
  }

}

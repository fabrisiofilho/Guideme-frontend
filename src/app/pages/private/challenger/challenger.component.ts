import { Component, EventEmitter, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';
import { DialogService } from 'primeng/dynamicdialog';
import { Challenger } from 'src/app/models/challenger';
import { Pageable } from 'src/app/models/pageable';
import { ChallengerService } from 'src/app/services/challenger.service';
import { UserService } from 'src/app/services/user.service';
import { NavComponent } from 'src/app/shared/nav/nav.component';
import { ValidationsComponent } from 'src/app/shared/validations/validations.component';

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

  @ViewChild('nav') navElement: NavComponent | undefined;

  constructor(private challengerService: ChallengerService,
    private userService: UserService,
    private dialogService: DialogService
    ) { }

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

  realizarDesafio(challenger: Challenger) {
    const ref = this.dialogService.open(ValidationsComponent, {
      data: {
        challenger: challenger
      },
      header: challenger.title,
    });

    ref.onClose.subscribe((status: string) => {
      this.navElement?.findPointsAndCoins();
      this.buscarItens("");
    });
  }

}

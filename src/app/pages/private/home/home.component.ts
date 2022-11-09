import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faAlignJustify, faCompass, faFeatherPointed, faGamepad, faGraduationCap, faRankingStar, faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { DialogService } from 'primeng/dynamicdialog';
import { Challenger } from 'src/app/models/challenger';
import { Pageable } from 'src/app/models/pageable';
import { AuthService } from 'src/app/security/auth.service';
import { ChallengerService } from 'src/app/services/challenger.service';
import { UserService } from 'src/app/services/user.service';
import { NavComponent } from 'src/app/shared/nav/nav.component';
import { ValidationsComponent } from 'src/app/shared/validations/validations.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean = true;

  usuario: String | null = null;

  itens?: Pageable<Challenger>;

  item: Challenger[] = [];

  faGamepad = faGamepad;

  faCompass = faCompass;

  faJs = faGraduationCap;

  faRankingStar = faRankingStar;

  faFeatherPointed = faFeatherPointed;

  text: string = "Realizar";

  @ViewChild('nav') navElement: NavComponent | undefined;

  constructor(private challengerService: ChallengerService,
              private dialogService: DialogService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.isHealth();
    this.usuario = localStorage.getItem("user");
    this.buscarItens("");
  }

  buscarItens(query: string) {
    this.challengerService.search(query).subscribe(it => {
      this.itens = it;
      this.item = it.content
    });
  }

  irAoRoadmap() {
    this.router.navigate(['/roadmap']);
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

  isHealth() {
    let myTimeout: string | number | NodeJS.Timeout | undefined;
    this.authService.health().subscribe({
      next: () => {
        clearTimeout(myTimeout);
        this.loading = false;
      },
      error: () => {
        myTimeout = setTimeout(() => this.isHealth(), 5000);
        this.loading = true;
      }
    })
  }

}

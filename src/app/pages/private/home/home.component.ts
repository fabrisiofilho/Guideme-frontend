import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAlignJustify, faCompass, faFeatherPointed, faGamepad, faGraduationCap, faRankingStar, faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { Challenger } from 'src/app/models/challenger';
import { Pageable } from 'src/app/models/pageable';
import { ChallengerService } from 'src/app/services/challenger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuario: String | null = null;

  itens?: Pageable<Challenger>;

  item: Challenger[] = [];

  faGamepad = faGamepad;

  faCompass = faCompass;

  faJs = faGraduationCap;

  faRankingStar = faRankingStar;

  faFeatherPointed = faFeatherPointed;

  text: string = "Realizar";

  constructor(private challengerService: ChallengerService,
              private router: Router) { }

  ngOnInit(): void {
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

}

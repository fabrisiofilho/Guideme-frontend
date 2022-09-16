import { Component, OnInit } from '@angular/core';
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';
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

  faFeatherPointed = faFeatherPointed;

  text: string = "Realizar";

  constructor(private challengerService: ChallengerService) { }

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

}

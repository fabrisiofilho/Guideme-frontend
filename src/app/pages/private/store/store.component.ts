import { Component, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/models/item';
import { Pageable } from 'src/app/models/pageable';
import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  faCoins = faCoins;
  size: SizeProp = "sm";
  itens?: Pageable<Item>;
  item: Item[] = [];
  vendinha: string = "vendinha";

  value!: number;

  text: string = "Comprar";

  constructor(private storeService: StoreService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.buscarItens("");
    this.buscarCoins();
  }

  buscarItens(query: string) {
    this.storeService.search(query).subscribe(it => {
      this.itens = it;
      this.item = it.content
    });
  }

  buscarCoins() {
    const email = localStorage.getItem("user_email");
    if (email) {
      this.userService.findUserByEmail(email).subscribe(it => {
        this.value = it.coins;
      });
    }
  }

}

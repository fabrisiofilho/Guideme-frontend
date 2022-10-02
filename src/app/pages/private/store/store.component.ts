import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { Item } from 'src/app/models/item';
import { Pageable } from 'src/app/models/pageable';
import { StoreService } from 'src/app/services/store.service';
import { ToastMessageService } from 'src/app/services/toast-message.service';
import { UserService } from 'src/app/services/user.service';
import { NavComponent } from 'src/app/shared/nav/nav.component';

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

  @ViewChild('nav') navElement: NavComponent | undefined;

  constructor(private storeService: StoreService,
              private userService: UserService,
              private messageService: ToastMessageService) { }

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

  comprarItem(item: any) {
    this.storeService.buyItem(item.id).subscribe({
      next: it => {
        this.buscarItens("");
        this.navElement?.findPointsAndCoins();
      },
      error: e => {
        console.log(e);
        this.messageService.addSingle("error", "Erro", e.error.errors.message);
      }
    });
  }

}

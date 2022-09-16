import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faBrain, faCartPlus, faCartShopping, faCoins, faFeatherPointed, faHouseFire, faRoad, faRoadCircleCheck, faTrowelBricks } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'guideme-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  profile: string | null;

  faFeatherPointed = faFeatherPointed;
  faCoins = faCoins;
  sizeSm: SizeProp = "sm";

  houseFire = faHouseFire;
  road = faRoad;
  shop = faCartShopping;
  ranking = faBrain;

  crudroad = faRoadCircleCheck;
  crudshop = faCartPlus;
  crudranking = faTrowelBricks;

  size: SizeProp = "lg";

  constructor(private router: Router) {
    this.profile = localStorage.getItem("profile");
  }

  ngOnInit(): void {
  }

  isActivated(path: String) {
    return this.router.url === path;
  }

}

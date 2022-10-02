import { Component, Input, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';
import { AuthService } from 'src/app/security/auth.service';

import { faBars, faBell, faCoins, faFeatherPointed, faHouseFire } from '@fortawesome/free-solid-svg-icons';
import { faRoad } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faRoadCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrowelBricks } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { DialogService } from 'primeng/dynamicdialog';
import { ProfileComponent } from '../profile/profile.component';
import { ConfigComponent } from '../config/config.component';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/security/models/user';

@Component({
  selector: 'guideme-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  openSide = false;

  profile: string | null;

  faBars = faBars;
  faBell = faBell;

  faFeatherPointed = faFeatherPointed;
  faCoins = faCoins;
  sizeSm: SizeProp = "sm";

  houseFire = faHouseFire;
  road = faRoad;
  shop = faCartShopping
  ranking = faBrain;

  crudroad = faRoadCircleCheck;
  crudshop = faCartPlus;
  crudranking = faTrowelBricks;

  size: SizeProp = "lg";

  items: MenuItem[] = [];

  user?: User;

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router,
              public dialogService: DialogService) {
                this.profile = localStorage.getItem("profile");
                this.findPointsAndCoins();
              }

  ngOnInit(): void {
    this.items = this.profile == 'ALUNO' ? [
      {label: 'Inventario', icon: 'pi pi-fw pi-wallet', command: ()=>{ this.openProfile() }},
      {label: 'Configurações', icon: 'pi pi-fw pi-cog', command: ()=>{ this.openConfig() }},
      {separator: true},
      {label: 'Sair', icon: 'pi pi-fw pi-sign-out', command: ()=>{ this.authService.logout() }}
    ] : [
      {label: 'Configurações', icon: 'pi pi-fw pi-cog', command: ()=>{ this.openConfig() }},
      {separator: true},
      {label: 'Sair', icon: 'pi pi-fw pi-sign-out', command: ()=>{ this.authService.logout() }}
    ];
  }

  isActivated(path: String) {
    return this.router.url === path;
  }

  photo() {
    return this.user?.urlPhoto;
  }

  name() {
    return this.user?.name;
  }

  openProfile() {
    const ref = this.dialogService.open(ProfileComponent, {
        header: 'Perfil',
        width: '70%',
        height: '90%'
    });
  }

  openConfig() {
    const ref = this.dialogService.open(ConfigComponent, {
        header: 'Configurações',
        width: '70%',
        height: '90%'
    });

    ref.onClose.subscribe((user: User) => {
      if (user) {
          this.user = user;
      }
    });
  }

  findPointsAndCoins() {
    let email = localStorage.getItem("user_email");
    if (email) {
      this.userService.findUserByEmail(email).subscribe((it)=> {
        this.user = it;
      });
    }
  }

}

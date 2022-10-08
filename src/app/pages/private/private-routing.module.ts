import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Interceptor } from 'src/app/security/interceptor/interceptor.service';
import { RouterGuardAdmin } from 'src/app/security/router-guard-admin.service';
import { RouterGuardAluno } from 'src/app/security/router-guard-aluno.service';
import { ChallengerCrudComponent } from './challenger-crud/challenger-crud.component';
import { ChallengerComponent } from './challenger/challenger.component';
import { HomeComponent } from './home/home.component';
import { RoadmapCrudComponent } from './roadmap-crud/roadmap-crud.component';
import { RoadmapValidateComponent } from './roadmap-validate/roadmap-validate.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { StoreCrudComponent } from './store-crud/store-crud.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    canActivate: [RouterGuardAluno]
  },
  {
    path:'roadmap',
    component: RoadmapComponent,
    canActivate: [RouterGuardAluno]
  },
  {
    path:'roadmap/validate/:id',
    component: RoadmapValidateComponent,
    canActivate: [RouterGuardAluno]
  },
  {
    path:'store',
    component: StoreComponent,
    canActivate: [RouterGuardAluno]
  },
  {
    path:'challenger',
    component: ChallengerComponent,
    canActivate: [RouterGuardAluno]
  },
  {
    path:'roadmap/admin',
    component: RoadmapCrudComponent,
    canActivate: [RouterGuardAdmin]
  },
  {
    path:'store/admin',
    component: StoreCrudComponent,
    canActivate: [RouterGuardAdmin]
  },
  {
    path:'challenger/admin',
    component: ChallengerCrudComponent,
    canActivate: [RouterGuardAdmin]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers:[
    Interceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
  ],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }

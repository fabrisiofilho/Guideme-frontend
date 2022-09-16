import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from 'src/app/shared/nav/nav.component';

import {AvatarModule} from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { StoreComponent } from './store/store.component';
import { ChallengerComponent } from './challenger/challenger.component';
import { ChallengerCrudComponent } from './challenger-crud/challenger-crud.component';
import { RoadmapCrudComponent } from './roadmap-crud/roadmap-crud.component';
import { StoreCrudComponent } from './store-crud/store-crud.component';
import { RouterGuardAdmin } from 'src/app/security/router-guard-admin.service';
import { RouterGuardAluno } from 'src/app/security/router-guard-aluno.service';
import { CreaterRoadmapComponent } from './roadmap-crud/components/creater-roadmap/creater-roadmap.component';
import { AddStepComponent } from './roadmap-crud/components/add-step/add-step.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SearchComponent } from 'src/app/shared/search/search.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from 'src/app/shared/table/table.component';
import { DividerModule } from 'primeng/divider';
import { InfoUserComponent } from 'src/app/shared/info-user/info-user.component';
import { ProgressBarModule } from 'primeng/progressbar';
import {ImageModule} from 'primeng/image';
import { ProfileComponent } from 'src/app/shared/profile/profile.component';
import { ConfigComponent } from 'src/app/shared/config/config.component';
import {RatingModule} from 'primeng/rating';
import { CardRoadmapComponent } from './roadmap/components/card-roadmap/card-roadmap.component';
import { SystemRoadmapComponent } from './roadmap/components/system-roadmap/system-roadmap.component';
import { FileUploadModule } from 'primeng/fileupload';
import { StepRoadmapComponent } from './roadmap/components/step-roadmap/step-roadmap.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SidenavComponent } from 'src/app/shared/sidenav/sidenav.component';
import { SidebarModule } from 'primeng/sidebar';
import { CardComponent } from 'src/app/shared/card/card.component';
import { NotificationsComponent } from 'src/app/shared/notifications/notifications.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BadgeModule } from 'primeng/badge';
import { RankingComponent } from 'src/app/shared/ranking/ranking.component';
import { TotalRankingComponent } from 'src/app/shared/total-ranking/total-ranking.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    RoadmapComponent,
    StoreComponent,
    ChallengerComponent,
    ChallengerCrudComponent,
    RoadmapCrudComponent,
    StoreCrudComponent,
    CreaterRoadmapComponent,
    AddStepComponent,
    SearchComponent,
    TableComponent,
    InfoUserComponent,
    ProfileComponent,
    ConfigComponent,
    CardRoadmapComponent,
    SystemRoadmapComponent,
    StepRoadmapComponent,
    SidenavComponent,
    CardComponent,
    NotificationsComponent,
    RankingComponent,
    TotalRankingComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    AvatarModule,
    MenuModule,
    FontAwesomeModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    DividerModule,
    ProgressBarModule,
    ImageModule,
    RatingModule,
    FileUploadModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    ProgressSpinnerModule,
    SidebarModule,
    OverlayPanelModule,
    BadgeModule
  ],
  providers: [RouterGuardAdmin, RouterGuardAluno]
})
export class PrivateModule { }

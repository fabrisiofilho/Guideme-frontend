import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Interceptor } from 'src/app/security/interceptor/interceptor.service';

const routes: Routes = [];

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

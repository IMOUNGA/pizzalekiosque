import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";

import { HomeComponent } from "./home.component";
import { HomeCardListComponent } from "./home-card-list/home-card-list.component";


@NgModule({
  declarations: [
    HomeComponent,
    HomeCardListComponent
  ],
  exports: [
    HomeComponent,
    HomeCardListComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }

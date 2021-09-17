import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCardListComponent } from "./home-card-list/home-card-list.component";
import {HomeComponent} from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import {RouterModule} from "@angular/router";


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
    CommonModule,
    HomeRoutingModule,
    RouterModule
  ]
})
export class HomeModule { }

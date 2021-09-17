import { NgModule } from '@angular/core';
import { SharedModule } from "../../../shared/shared.module";
import {MenuRoutingModule} from "./menu-routing.module";

import {MenuComponent} from "./menu.component";
import {BannieresMenusDirective} from "../../../directives/bannieres-menus.directive";
import { MenuCardComponent } from './menu-card/menu-card.component';


@NgModule({
  declarations: [
    MenuComponent,
    BannieresMenusDirective,
    MenuCardComponent
  ],
  exports: [
    BannieresMenusDirective
  ],
  imports: [
    SharedModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }

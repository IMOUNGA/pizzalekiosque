import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { CarteRoutingModule } from './carte-routing.module';

import { CarteComponent } from "./carte.component";
import { MenuComponent } from './menu/menu.component';
import {MenuModule} from "./menu/menu.module";

@NgModule({
  declarations: [
    CarteComponent,
  ],
  imports: [
    SharedModule,
    CarteRoutingModule,
  ],
  exports: [
    CarteComponent
  ]
})
export class CarteModule { }

import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { CarteRoutingModule } from './carte-routing.module';

import { CarteComponent } from "./carte.component";
import { DessertComponent } from './dessert/dessert.component';

@NgModule({
  declarations: [
    CarteComponent,
    DessertComponent,
  ],
  imports: [
    SharedModule,
    CarteRoutingModule,
  ],
  exports: [
    CarteComponent,
  ]
})
export class CarteModule { }

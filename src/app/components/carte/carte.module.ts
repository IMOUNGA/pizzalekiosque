import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { CarteRoutingModule } from './carte-routing.module';

import { CarteComponent } from "./carte.component";

@NgModule({
  declarations: [
    CarteComponent,
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinksRoutingModule } from './drinks-routing.module';
import {DrinksComponent} from "./drinks.component";
import { DrinksCardComponent } from './drinks-card/drinks-card.component';
import {MenuModule} from "../menu/menu.module";


@NgModule({
  declarations: [
    DrinksComponent,
    DrinksCardComponent,
  ],
  imports: [
    CommonModule,
    DrinksRoutingModule,
    MenuModule
  ]
})
export class DrinksModule { }

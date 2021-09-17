import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [],
  imports: SharedModule.MODULE_LIST,
  exports: SharedModule.MODULE_LIST
})
export class SharedModule {
  static readonly MODULE_LIST = [
    CommonModule,
    RouterModule
  ]
}

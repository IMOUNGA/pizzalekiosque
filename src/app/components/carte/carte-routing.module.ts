import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarteComponent} from "./carte.component";
import { MenuModule } from './menu/menu.module';

const routes: Routes = [
  {
    path: '',
    component: CarteComponent,
    children: [
      { path: '', loadChildren: () => import('./menu/menu.module')
          .then(m => m.MenuModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarteRoutingModule { }

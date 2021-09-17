import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarteComponent} from "./carte.component";

const routes: Routes = [
  {
    path: '',
    component: CarteComponent,
    children: [
      { path: '', loadChildren: () => import('./menu/menu.module')
          .then(m => m.MenuModule)
      },
      {
        path: 'boissons', loadChildren: () => import('./drinks/drinks.module')
          .then(m => m.DrinksModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarteRoutingModule { }

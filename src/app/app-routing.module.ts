import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import {NotFoundComponent} from "./modules/general/not-found/not-found.component";

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./components/home/home.module')
      .then(m => m.HomeModule)
  },
  { path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module')
      .then(m => m.ContactModule)
  },
  { path: 'components',
    loadChildren: () => import('./modules/application/components/components.module')
      .then(m => m.ComponentsModule)
  },
  { path: '**', component: NotFoundComponent },
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

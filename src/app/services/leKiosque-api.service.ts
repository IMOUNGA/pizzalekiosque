import {Injectable} from '@angular/core';

import {MENU} from "../bdd/menu";
import {CREPESSUCRES} from "../bdd/crepesSucres";
import {DRINKS} from "../bdd/drinks";
import {DESSERT} from "../bdd/dessert";
import {CREPES} from "../bdd/crepes";
import {PIZZAS} from "../bdd/pizzas";
import {PLATSCHAUDS} from "../bdd/platschauds";
import {PROMOS} from "../bdd/promos";
import {SALADES} from "../bdd/salades";
import {SANDWICHS} from "../bdd/sandwichs";
import {PANINI} from "../bdd/panini";
import {PAELLA} from "../bdd/paella";


import {HomeCard} from "../interfaces/HomeCard";
import {Menu} from "../interfaces/Menu";
import {Drinks} from "../interfaces/Drinks";
import {Crepes} from "../interfaces/Crepes";
import {CrepesSucres} from "../interfaces/Crepessucres";
import {Dessert} from "../interfaces/Dessert";
import {Pizza} from "../interfaces/Pizzas";
import {Platschauds} from "../interfaces/PlatsChauds";
import {Promos} from "../interfaces/Promos";
import {Salades} from "../interfaces/Salades";
import {Sandwichs} from "../interfaces/Sandwichs";
import {Panini} from "../interfaces/Panini";
import {Paella} from "../interfaces/Paella";
import {TexMex} from "../interfaces/TexMex";
import {TEXMEX} from "../bdd/texmex";
import {MenuMidi} from "../interfaces/MenuMidi";
import {MENUMIDI} from "../bdd/menumidi";





@Injectable({
  providedIn: 'root'
})
export class LeKiosqueApiService {
  menu: Menu[] = MENU;

  card: HomeCard[] = [
    {
      title: 'La carte',
      description: 'Découvrez nos pizzas traditionnelles, nos crêpes sucrées et salées ainsi que nos différents plats chauds, salades, sandwichs, etc',
      buttonText: 'Voir la carte',
      redirectTo: '/carte',
      activeLink: true
    },
    {
      title: 'Menus et Promos',
      description: 'Découvrez nos promos, nos menus enfants ainsi que nos menus midi spécial entreprise',
      buttonText: 'Voir plus',
      redirectTo: 'menus-promos',
      activeLink: true
    },
  ]

  constructor() {
  }

  getHomeCard(): HomeCard[] {
    return this.card;
  }

  getMenu(): Menu[] {
    return this.menu;
  }

  getDrinks(): Drinks[] {
    return DRINKS;
  }

  getCrepes(): Crepes[] {
    return CREPES;
  }

  getCrepesSucres(): CrepesSucres[] {
    return CREPESSUCRES;
  }

  getDesserts(): Dessert[] {
    return DESSERT;
  }

  getPizzas(): Pizza[] {
    return PIZZAS;
  }

  getPlatsChaud(): Platschauds[] {
    return PLATSCHAUDS;
  }

  getPromos(): Promos[] {
    return PROMOS;
  }

  getSalades(): Salades[] {
    return SALADES;
  }

  getSandwichs(): Sandwichs[] {
    return SANDWICHS;
  }

  getPanini(): Panini[] {
    return PANINI;
  }

  getPaella(): Paella[] {
    return PAELLA;
  }

  getTexMex(): TexMex[] {
    return TEXMEX;
  }

  getMenuMidi(): MenuMidi[] {
    return MENUMIDI;
  }

}

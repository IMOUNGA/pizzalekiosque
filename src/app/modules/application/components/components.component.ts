import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  /*card: [{}] = [
    {
      title: 'La carte',
      description: 'Découvrez nos pizzas traditionnelles ainsi que nos différents plats chauds, salades, sandwichs, etc',
      buttonText: 'Voir la carte'
    },
    {
      title: 'Menus et Promos',
      description: 'Découvrez nos promos, nos menus enfants ainsi que nos menus midi spécial entreprise',
      buttonText: 'Voir plus'
    },
  ]*/

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {LeKiosqueApiService} from "../../../services/leKiosque-api.service";
import {Drinks} from "../../../interfaces/Drinks";

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  items: Drinks[] = [];

  constructor(private lekiosqueapi: LeKiosqueApiService) { }

  ngOnInit(): void {
    this.getDrinks();
  }

  getDrinks(): void {
     this.items = this.lekiosqueapi.getDrinks();
  }
}

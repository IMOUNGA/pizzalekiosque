import { Component, OnInit } from '@angular/core';
import {LeKiosqueApiService} from "../../../services/leKiosque-api.service";
import {Menu} from "../../../interfaces/Menu";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: Menu[] = [];

  constructor(private lekiosqueapi: LeKiosqueApiService) { }

  ngOnInit(): void {
    this.getMenuItems();
  }

  getMenuItems(): void {
    this.menuItems = this.lekiosqueapi.getMenu();
  }

}

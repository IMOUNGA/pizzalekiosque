import { Component, OnInit } from '@angular/core';
import { LeKiosqueApiService } from "../../../services/leKiosque-api.service";
import {HomeCard} from "../../../interfaces/HomeCard";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards: HomeCard[] = [];

  constructor(private homeCardService: LeKiosqueApiService) { }

  ngOnInit(): void {
    this.getHomeCards()
  }

  getHomeCards(): void {
    this.cards = this.homeCardService.getHomeCard();
  }

}

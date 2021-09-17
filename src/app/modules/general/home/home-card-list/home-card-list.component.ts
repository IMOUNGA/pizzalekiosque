import {Component, Input, OnInit} from '@angular/core';
import {HomeCard} from "../../../../interfaces/HomeCard";

@Component({
  selector: 'app-home-card-list',
  templateUrl: './home-card-list.component.html',
  styleUrls: ['./home-card-list.component.css']
})
export class HomeCardListComponent implements OnInit {
  @Input() card?: HomeCard;

  constructor() { }

  ngOnInit(): void {
  }

}

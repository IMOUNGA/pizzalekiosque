import {Component, Input, OnInit} from '@angular/core';
import {Drinks} from "../../../../interfaces/Drinks";
import {Menu} from "../../../../interfaces/Menu";

@Component({
  selector: 'app-drinks-card',
  templateUrl: './drinks-card.component.html',
  styleUrls: ['./drinks-card.component.css']
})
export class DrinksCardComponent implements OnInit {
  @Input() item?: Drinks;

  constructor() { }

  ngOnInit(): void {
  }

}

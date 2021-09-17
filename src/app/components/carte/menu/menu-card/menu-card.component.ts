import {Component, Input, OnInit} from '@angular/core';
import {Menu} from "../../../../interfaces/Menu";

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {
  @Input() item?: Menu;

  constructor() { }

  ngOnInit(): void {
  }

  getItemBanniere(item: Menu): string {
    return item.image;
  }

}

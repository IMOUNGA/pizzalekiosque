import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pizza Le Kiosque';
  infos = {
    phone: '01.64.26.72.13',
    address: '50 Rue Gambetta, 77500 CHELLES',
    delivery: 'Livraison gratuite à domicile et au bureau'
  };
}

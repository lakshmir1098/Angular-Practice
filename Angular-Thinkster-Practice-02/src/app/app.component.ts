import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Add data elements for your name, the title, year released, rating, and imdb link of your favorite movie
  YOUR_NAME_HERE = 'Lakshmi';
  favFlop = {
    title: 'Star Wars',
    yearReleased: 1998,
    rating: 5,
    idbm: 'https://imdb.com/',
  };
}

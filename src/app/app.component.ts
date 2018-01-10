import { Component } from '@angular/core';
// import Imdb = require('imdb-api');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // imdb = require('imdb-api');
  // Imdb
  constructor(){
    const imdb = require('imdb-api');
    imdb.get('The T', {apiKey: 'PlsBanMe', timeout: 30000}).then(console.log).catch(console.log);
  }
  
}

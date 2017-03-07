import { Component } from '@angular/core';
import { COMPANIES } from './services/companies'
// import { RESULTS } from './services/results'
import { Http, Response, Headers } from '@angular/http'



@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Compare prices from 2058 certified sustainable companies';
  companies = COMPANIES;
  searchQuery: string = null;

}

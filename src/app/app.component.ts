import { Component } from '@angular/core';
import { COMPANIES } from '../assets/companies'
// import { RESULTS } from './services/results'
import { Http, Response, Headers } from '@angular/http'



@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  companies = COMPANIES;
  searchQuery: string = null;

  companyCount = this.objectLength(this.companies); // for your example, 3



  objectLength(obj) {
	  var result = 0;
	  for(var prop in obj) {
	    if (obj.hasOwnProperty(prop)) {
	    // or Object.prototype.hasOwnProperty.call(obj, prop)
	      result++;
	    }
	  }
	  return result;
	}

	


}

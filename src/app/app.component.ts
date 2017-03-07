import { Component } from '@angular/core';
import { COMPANIES } from './services/companies'
import { RESULTS } from './services/results'
import { Http, Response, Headers } from '@angular/http'

import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'Compare prices from 2058 certified sustainable companies';
  companies = COMPANIES;
  results = RESULTS;
  searchQuery: string = null;
  resultItems = null;
  

  constructor( private http: Http){}



  getResult(){
    // let reqUrl = 'https://rest.viglink.com/api/product/search?apiKey=645728cd6d815e3890d53f3b16f562cd&query=patagonia%20surfing&filterImages=false';
    let reqUrl = 'https://rest.viglink.com/api/product/search?apiKey=645728cd6d815e3890d53f3b16f562cd&query='+this.searchQuery+'&filterImages=false';
    let reqHeaders = new Headers({ 'Authorization': '57b0201432561234baaf7c58fa7797fb70b5689f' });
    this.http.get(reqUrl, {headers: reqHeaders})
             .map(res => this.resultItems = res.json())
             .subscribe()
    // console.log('resultItems: ' + this.resultItems.items[2].name)
    
    // return resultItems

  }


  
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }


}

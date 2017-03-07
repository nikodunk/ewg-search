import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Http, Response, Headers } from '@angular/http'

@Component({
  selector: 'juice-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {

	@Input() searchQuery;
	@Input() company;
	resultItems = null;

  constructor(private http: Http) { }


getResult(){
    // let reqUrl = 'https://rest.viglink.com/api/product/search?apiKey=645728cd6d815e3890d53f3b16f562cd&query=patagonia%20surfing&filterImages=false';
    // let reqUrl = 'https://rest.viglink.com/api/product/search?apiKey=645728cd6d815e3890d53f3b16f562cd&query='+this.searchQuery+'&filterImages=false';
    let reqUrl = 'https://rest.viglink.com/api/product/search?apiKey=645728cd6d815e3890d53f3b16f562cd&query='+this.company.name+'&filterImages=false';
    let reqHeaders = new Headers({ 'Authorization': '57b0201432561234baaf7c58fa7797fb70b5689f' });
    this.http.get(reqUrl, {headers: reqHeaders})
             .map(res => {this.resultItems = res.json();
                           console.log(this.resultItems)})
             .subscribe()
    // console.log('resultItems: ' + this.resultItems.items[2].name)
    
    // return resultItems

  }

  ngOnInit() {
  	this.getResult()
  }

}

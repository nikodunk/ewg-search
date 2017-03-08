import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';

import { Observable, Subscription } from 'rxjs'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'juice-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {

	@Input() searchQuery;
	@Input() company;
	resultItems = null;
  subscription: Subscription;
  loader: string = 'wait'
  firstNameCompany: string;


  constructor(private http: Http) { }


  getResult(){
      // let reqUrl = 'https://rest.viglink.com/api/product/search?apiKey=645728cd6d815e3890d53f3b16f562cd&query=patagonia%20surfing&filterImages=false';
      // let reqUrl = 'https://rest.viglink.com/api/product/search?apiKey=645728cd6d815e3890d53f3b16f562cd&query='+this.searchQuery+'&filterImages=false';
      let reqUrl = 'https://rest.viglink.com/api/product/search?apiKey=645728cd6d815e3890d53f3b16f562cd&query='+this.company.name+'&filterImages=false';
      // this.getQuery()
      // let reqUrl = 'https://rest.viglink.com/api/product/search?apiKey=645728cd6d815e3890d53f3b16f562cd&query='+this.firstNameCompany+'%20'+this.searchQuery+'&filterImages=false';
      // let reqUrl = 'https://rest.viglink.com/api/product/search?apiKey=645728cd6d815e3890d53f3b16f562cd&query='+this.company.name+'%20'+this.searchQuery+'&filterImages=false';
      let reqHeaders = new Headers({ 'Authorization': '57b0201432561234baaf7c58fa7797fb70b5689f' });
      this.http.get(reqUrl, {headers: reqHeaders})
               .map(res => {this.resultItems = res.json()})
               .subscribe((data) => {console.log(this.resultItems)
                                     this.loader = 'loaded';
                                     })
      // console.log('resultItems: ' + this.resultItems.items[2].name)
      // return resultItems
    }

    // getQuery(){
    //   this.firstNameCompany = this.company.name.substr(0, this.company.name.indexOf(" "))
    // }


  ngOnInit() {
      let timer = Observable.timer(1500);
      this.subscription = timer .subscribe(t=> { this.loader = 'loading';
                                                 this.getResult();
                                                 // console.log('now start getting request');
                                                });
    };


  ngOnDestroy() {
      this.subscription.unsubscribe();
      this.resultItems = null;
   }

}
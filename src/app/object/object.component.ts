import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';

import { Observable, Subscription } from 'rxjs'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

declare var ga: any;

@Component({
  selector: 'juice-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent {

	@Input() searchQuery;
	@Input() product;
  subscription: Subscription;


  constructor(private http: Http) { }


  googleAnalytics(){
    ga('send', 'event', 'Affiliate', this.product.name)
  }



}
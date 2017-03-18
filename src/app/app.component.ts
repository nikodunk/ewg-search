import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../assets/products'
// import { RESULTS } from './services/results'
import { Http, Response, Headers } from '@angular/http'

declare var fbq: any;

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	products = PRODUCTS;
	searchQuery: string = null;
	timer = null
	companyCount
	resultLimit: number = 10
	filteredProducts = null
	default = true
	mySearching = false
	typing = false
	resultShower = false
	tooShort = false

	constructor(private http: Http) { }

  keyDown(){
  	this.default = false
  	this.typing = true
  	this.tooShort = false
  	this.mySearching = false
  	this.resultShower = false;
  	this.resultLimit = 10
	  if ( this.timer ){
	  			clearTimeout( this.timer )
	  		}
	  else{}

	this.timer = window.setTimeout(()=>{
						this.typing = false;
						this.mySearching = true;
				   		this.queryChecker()}, 1000)
						
	}

	queryChecker(){
		if (this.searchQuery){
			if (this.searchQuery.length > 3){
				this.tooShort = false
				this.mySearching = true
				this.filteredProducts = this.filterItems(this.searchQuery)
				this.getMissingData(this.filteredProducts)
				this.mySearching = false;
				console.log(this.filteredProducts)
   				this.resultShower = true;
				fbq('track', 'Search', {
				search_string: this.searchQuery
				});
			}

			else {
				this.tooShort = true
			}
				
			this.timer = null
		}
		else{
			this.tooShort = false
			this.mySearching = false
			this.resultShower = false
			this.typing = false
			this.default = true
			this.searchQuery = null
			this.timer = null
			}
		
	}

   filterItems(query) {
	    return this.products.filter(function(el) {
	     return el.name.toUpperCase().indexOf(query.toUpperCase()) > -1;
	    })
	}

	getMissingData(products){
		for(let product of products){
			let reqUrl = 'https://rest.viglink.com/api/product/search?apiKey=645728cd6d815e3890d53f3b16f562cd&query='+product.name+'&itemsPerPage=1&filterImages=false'
      		let reqHeaders = new Headers({ 'Authorization': 'secret 57b0201432561234baaf7c58fa7797fb70b5689f' });
      		this.http.get(reqUrl, {headers: reqHeaders})
               .map(res => {product.imageUrl = res.json().items[0].imageUrl;
               				product.price = res.json().items[0].price;
               				product.affLink = res.json().items[0].url})
               .subscribe((data) => {this.sortByPrice(this.filteredProducts)})
		}
		

	}

	sortByPrice(products){
			return products.sort(function(a, b) {
	    		return parseFloat(a.price) - parseFloat(b.price);
			})
	}



  objectLength(obj) {
		  var result = 0;
		  for(var prop in obj) {
		    if (obj.hasOwnProperty(prop)) {
		      result++;
		    }
		  }
		  return result;
		}


	ngOnInit(){
		this.companyCount = this.objectLength(this.products); 
		}


}

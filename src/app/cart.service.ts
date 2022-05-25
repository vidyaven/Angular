import { product } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsCount() {

    return this.items.length
  }

  items:product[]=[];
addToCart(product:product){
  this.items.push(product)
}
getItems(){
  return this.items
}
clearCart(){
  this.items=[];
  return this.items
}

getShippingPrices(){
  return this.http.get<{type:string,Price:number}[]>
  ('/assets/shipping.json');
}


  constructor( private http: HttpClient) { }
}

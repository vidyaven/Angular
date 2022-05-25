import { Component, OnInit } from '@angular/core';
import { products } from '../products';
// import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
product=products
  constructor() { }

  ngOnInit(): void {
  }
share(){
  alert("The Product has been Recorded")
}
onNotify() {
  window.alert('You will be notified when the product goes on sale');
}
}

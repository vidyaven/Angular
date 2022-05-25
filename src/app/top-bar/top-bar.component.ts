import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }
itemCount(){
  return this.cartService.itemsCount();
}
}

// import { CartService } from './../cart.service';
// import { product } from './../products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find } from 'rxjs';
import { product,products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: product | undefined;
  
  constructor(private route:ActivatedRoute,
    private cartService:CartService
     ) { }
     addToCart(product:product){
       this.cartService.addToCart(product);
window.alert("your product has been added to cart")
     }

  ngOnInit(): void {
    const routeParams=this.route.snapshot.paramMap;
    const productIdFromRoute=Number(routeParams.get('productId'));
    this.product=products.find(product=>product.id===productIdFromRoute);
  }

}

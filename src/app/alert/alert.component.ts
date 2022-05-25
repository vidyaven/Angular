import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';
import { product } from '../products';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  // @Input() product!: product;
  // @Output() notify=new EventEmitter();
  @Input() product: product | undefined;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}

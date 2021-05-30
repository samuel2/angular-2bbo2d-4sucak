import { Component, OnInit } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product: Product | undefined;
  constructor() {}

  ngOnInit() {}
}

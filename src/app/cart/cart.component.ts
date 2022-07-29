import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CartService} from "./cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  constructor(
    public cartService: CartService
  ) {}

  ngOnInit(): void {
  }


}

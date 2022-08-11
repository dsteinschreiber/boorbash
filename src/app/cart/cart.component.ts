import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CartService} from "./cart.service";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  restaurantId!: number;

  constructor(
    public cartService: CartService,
    private route: ActivatedRoute,

  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.restaurantId = parseInt(params['restaurantId']); // Forcing restaurantId to be number
      }
    )
  }



}

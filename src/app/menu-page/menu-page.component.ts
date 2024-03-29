import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {BackEndConnectionService} from "../back-end-connection.service";
import {Menu} from "../interfaces/menu";
import {CartService} from "../cart/cart.service";

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  restaurantId!: number;
  menu!: Menu;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private backendService: BackEndConnectionService,
    private cartService: CartService
  ) {
  }



  getItemQuantity(itemName: string): number{
    return this.cartService.getItemQuantity(itemName, this.restaurantId);
  }

  onCartClick(){
    console.log("Cart Click! ", this.restaurantId);
    this.router.navigate(["cart", this.restaurantId]);
  }

  addClick(dishName: string, dishPrice: number){
    console.log("Adding to cart! ", dishName);
    this.cartService.add(dishName, dishPrice, this.restaurantId);
  }

  removeClick(dishName: string){
    console.log("Removing from cart! ", dishName);
    this.cartService.remove(dishName, this.restaurantId);
  }

  ngOnInit(): void {
    this.route.data.subscribe(({menu}) =>
    {
      this.menu = menu;
      this.restaurantId = menu.restaurantId;
    });
  }

}

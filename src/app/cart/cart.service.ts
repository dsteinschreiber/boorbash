import {Component, Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {


  cart = {
    restaurantName: 'Little Italy',
    items: new Array<any>()
  };

  getItemQuantity(itemName: string): number{
    let result = 0;

    for (let item of this.cart.items) {
      if (itemName == item.item) {
        result = item.quantity;
      }
    }

    return result;
  }

  add(dishName: string, dishPrice: number){
    console.log("Adding " + dishName + " at $" + dishPrice + " to cart!");
    for (let item of this.cart.items){
      if (dishName === item.item){
        item.quantity++;
        return;
      }
    }
    this.cart.items.push({unitPrice: dishPrice, item: dishName, quantity: 1});
    return;
  }

  remove(dishName: string){
    console.log("Removing " + dishName + " from cart!");
    for (let i = 0; i < this.cart.items.length; i++){
      if (dishName === this.cart.items[i].item){
        this.cart.items[i].quantity--;
        if (this.cart.items[i].quantity === 0){
          this.cart.items.splice(i, 1);
        }
      }
    }
    console.log("Cart is: ", this.cart);
  }

  constructor() {
  }


}

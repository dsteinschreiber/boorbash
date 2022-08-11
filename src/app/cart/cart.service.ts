import {Component, Injectable} from '@angular/core';
import {Cart} from "../interfaces/cart";


@Injectable({
  providedIn: 'root'
})
export class CartService {

  carts = new Array<Cart>();


  getItemQuantity(itemName: string, restaurantId: number): number {

    let result = 0;
    // ****

    for (let cart of this.carts) {
      if (cart.restaurantId === restaurantId) {
        for (let item of cart.items) {
          if (itemName === item.item) {
            result = item.quantity;
          }
        }
      }
    }

    return result;
  }

  add(dishName: string, dishPrice: number, restaurantId: number) {
    console.log("Adding " + dishName + " at $" + dishPrice + " to restaurant " + restaurantId + " cart!");

    for (let cart of this.carts) {
      if (cart.restaurantId === restaurantId) {
        for (let item of cart.items) {
          if (dishName === item.item) {
            item.quantity++;
            return;
          }
        }
        cart.items.push({unitPrice: dishPrice, item: dishName, quantity: 1});
        return;
      }
    }

    this.carts.push({restaurantId: restaurantId, items: [{unitPrice: dishPrice, item: dishName, quantity: 1}]})

    return;
  }

  remove(dishName: string, restaurantId: number) {
    console.log("Removing " + dishName + " from cart!");

    for (let cart of this.carts) {
      if (cart.restaurantId === restaurantId) {
        for (let i = 0; i < cart.items.length; i++) {
          if (dishName === cart.items[i].item) {
            cart.items[i].quantity--;
            if (cart.items[i].quantity === 0) {
              cart.items.splice(i, 1);
            }
          }
        }
        console.log("Cart is: ", cart);
      }
    }
  }

  getCart(restaurantId: number): Cart {
    console.log("Looking for " + restaurantId, this.carts);

    for (let cart of this.carts) {
      if (cart.restaurantId === restaurantId) {
        console.log("Found cart! " + cart);
        return cart;
      }
    }

    return {restaurantId: restaurantId, items: []};
  }


  constructor() {
  }


}

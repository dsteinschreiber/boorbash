import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchRestaurantsComponent} from "./search-restaurants/search-restaurants.component";
import {MenuPageComponent} from "./menu-page/menu-page.component";
import {CartComponent} from "./cart/cart.component";
import {MenuResolver} from "./menu-resolver";

const routes: Routes = [
  {path: '', component: SearchRestaurantsComponent},
  {
    path: 'menu/:restaurantId', component: MenuPageComponent,
    resolve: {menu: MenuResolver}
  },
  {path: 'cart/:restaurantId', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

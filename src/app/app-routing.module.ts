import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchRestaurantsComponent} from "./search-restaurants/search-restaurants.component";
import {MenuPageComponent} from "./menu-page/menu-page.component";

const routes: Routes = [
  {path: '', component: SearchRestaurantsComponent},
  {path: 'menu', component: MenuPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

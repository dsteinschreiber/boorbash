import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchRestaurantsComponent } from './search-restaurants/search-restaurants.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatGridListModule} from "@angular/material/grid-list";
import { SearchResultsComponent } from './search-results/search-results.component';
import {MatDividerModule} from "@angular/material/divider";
import { MenuPageComponent } from './menu-page/menu-page.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchRestaurantsComponent,
    SearchResultsComponent,
    MenuPageComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatGridListModule,
    MatDividerModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

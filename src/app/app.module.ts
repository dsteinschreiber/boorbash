import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchRestaurantsComponent } from './search-restaurants/search-restaurants.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatGridList, MatGridListModule} from "@angular/material/grid-list";
import { SearchResultsComponent } from './search-results/search-results.component';
import {MatDividerModule} from "@angular/material/divider";
import { MenuPageComponent } from './menu-page/menu-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchRestaurantsComponent,
    SearchResultsComponent,
    MenuPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatGridListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

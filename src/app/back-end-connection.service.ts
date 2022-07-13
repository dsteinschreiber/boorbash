import { Injectable } from '@angular/core';
import {RestaurantData} from "./interfaces/restaurant-data";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackEndConnectionService {

  constructor(
    private httpClient: HttpClient
  ) { }

  baseUrl = "http://localhost:8080/";

  restaurantSearch(searchString: string): Observable<any> {
    console.log("searching...", searchString);

    let params = new HttpParams().set("searchString", searchString);

    return this.httpClient.get(this.baseUrl + "restaurantSearch", {params: params});
  }

  getMenu(restaurantId: number): Observable<any> {
    console.log("getting menu...", restaurantId);

    let params = new HttpParams().set("restaurantId", restaurantId);

    return this.httpClient.get(this.baseUrl + "getMenu", {params: params})
      .pipe(tap(value => console.log("Menu received ", value)));
  }

}

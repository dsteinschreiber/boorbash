import { Injectable } from '@angular/core';
import {RestaurantData} from "./interfaces/restaurant-data";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackEndConnectionService {

  constructor(
    private httpClient: HttpClient
  ) { }

  baseUrl = "http://localhost:8080/";

  restaurantSearch(searchString: string): Observable<any> {
    console.log("searching", searchString);

    let params = new HttpParams().set("searchString", searchString);

    return this.httpClient.get(this.baseUrl + "restaurantSearch", {params: params});
  }

}

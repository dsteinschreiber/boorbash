import { Injectable } from '@angular/core';
import {RestaurantData} from "./interfaces/restaurant-data";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackEndConnectionService {

  constructor(
    private httpClient: HttpClient
  ) { }


  restaurantSearch(searchString: string): Observable<any> {
    return this.httpClient.get("http://localhost:8080/restaurantSearch");
  }

}

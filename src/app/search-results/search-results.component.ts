import {Component, Input, OnInit} from '@angular/core'
import {RestaurantData} from "../interfaces/restaurant-data";
import {BackEndConnectionService} from "../back-end-connection.service";


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() searchString = "";

  searchResult: Array<RestaurantData> = [];

  constructor(
    private backendService: BackEndConnectionService
  ) {
  }

  ngOnInit(): void {
    console.log("Results loaded", this.searchString);
    this.searchResult = this.backendService.restaurantSearch(this.searchString);
  }

}

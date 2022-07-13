import {Component, Input, OnInit} from '@angular/core'
import {RestaurantData} from "../interfaces/restaurant-data";
import {BackEndConnectionService} from "../back-end-connection.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() searchString = "";

  searchResult: Array<RestaurantData> = [];

  constructor(
    private backendService: BackEndConnectionService,
    private router: Router
  ) {
  }

  doSearch() {
    console.log("Results loaded", this.searchString);
    this.backendService.restaurantSearch(this.searchString).subscribe(
      data => {
        this.searchResult = data;
        console.log("Coming from backend: ", data)
      }
    );
  }

  onResultClick(id: any) {
    console.log("CLICK! ", id);
    this.router.navigate(["menu", id]);
  }

  ngOnInit(): void {
  }

}

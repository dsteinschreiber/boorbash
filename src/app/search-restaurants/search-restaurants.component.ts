import {Component, OnInit, ViewChild} from '@angular/core';
import {SearchResultsComponent} from "../search-results/search-results.component";

@Component({
  selector: 'app-search-restaurants',
  templateUrl: './search-restaurants.component.html',
  styleUrls: ['./search-restaurants.component.css']
})
export class SearchRestaurantsComponent implements OnInit {

  constructor() { }

  @ViewChild(SearchResultsComponent) searchResultComponent!: SearchResultsComponent;

  searchResultsVisible = false;
  searchString = "";

  ngOnInit(): void {
  }

  goClick() {
    console.log("WENT!", this.searchString);
    this.searchResultsVisible = true;
    this.searchResultComponent!.doSearch();
  }


}

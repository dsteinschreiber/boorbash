import {Component, Input, OnInit} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

interface RestaurantData {
  pictureUrl?: string;
  name: string;
  description: string;
  rating: number;
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() searchString = "";

  searchResult: Array<RestaurantData> = [];

  sampleResults = [
    {
      name: "Little Italy",
      description: "Restaurant description for some italian restaurant",
      rating: 4.5
    },
    {
      name: "Danny's Burgers",
      description: "Best burgers in town!",
      rating: 5.0
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
    console.log("Results loaded", this.searchString);
    this.searchResult = this.sampleResults;
  }

}

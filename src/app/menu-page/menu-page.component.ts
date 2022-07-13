import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {BackEndConnectionService} from "../back-end-connection.service";

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  restaurantId!: number;
  menu!: any;

  constructor(
    private route: ActivatedRoute,
    private backendService: BackEndConnectionService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.restaurantId = params['restaurantId'];
        this.backendService.getMenu(this.restaurantId).subscribe(
          data => this.menu = data
        );
      }
    );
  }

}

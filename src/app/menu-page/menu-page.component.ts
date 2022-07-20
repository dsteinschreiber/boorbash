import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {BackEndConnectionService} from "../back-end-connection.service";
import {Menu} from "../interfaces/menu";

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  restaurantId!: number;
  menu!: Menu;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private backendService: BackEndConnectionService
  ) {
  }

  onCartClick(){
    console.log("Cart Click!");
    this.router.navigate(["cart"]);
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

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  @Input() restaurantId!: number;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  services: string[];
  vehicleColor: string[];

  constructor() { }

  ngOnInit() {
    this.services = [ 'Fuel Delivery', 'Flat Tire', 'Jump Start', 'Tow', 'Locksmith' ];
    this.vehicleColor = [ 'black', 'white', 'silver', 'gold', 'red', 'green', 'blue', 'other' ];
  }

}

import { Component, OnInit } from '@angular/core';
import { MapsService } from '../services/maps.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  services: string[];
  vehicleColor: string[];
  lat: string = '';
  lng: string = '';

  location: Object;

  constructor(private map: MapsService) { }

  ngOnInit() {
    this.services = [ 'Fuel Delivery', 'Flat Tire', 'Jump Start', 'Tow', 'Locksmith' ];
    this.vehicleColor = [ 'black', 'white', 'silver', 'gold', 'red', 'green', 'blue', 'other' ];

    this.map.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
    })
  }

}

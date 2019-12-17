import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { vehicles } from '../vehicles';
@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
vehicle;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.vehicle = vehicles[+params.get('vehicleId')];
    });
  }

}
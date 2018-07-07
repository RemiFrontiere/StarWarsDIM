import { Component, OnInit, Input } from '@angular/core';

import { environment as env } from '@env/environment';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import { Globals } from '../../class/globals';

import { ICustomer, IPlanet, IResident, IVehicle } from '../../class/Interfaces';

@Component({
  selector: 'vehicle-component',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;
  @Input('vehicle') vehicle:IVehicle;
  public pilots:IResident[];
  public currentPage:number = 1;

  constructor(public globals:Globals){
    this.currentPage = 1;
    this.pilots = [];
  }

  ngOnInit() {
    if(this.vehicle && this.vehicle.pilots){
      for(let pilot of this.vehicle.pilots){
        this.globals.apiGetResident(pilot).subscribe(data => {
          // console.log(data)
          if(data){
            this.pilots.push(data);
          }
        });
      }
    }
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }
}

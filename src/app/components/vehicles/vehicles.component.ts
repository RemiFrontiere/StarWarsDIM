import { Component, OnInit } from '@angular/core';

import { environment as env } from '@env/environment';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import { Globals } from '../../class/globals';

import { ICustomer, IPlanet, IResident, IVehicle } from '../../class/Interfaces';

@Component({
  selector: 'vehicles-component',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;
  public vehicles:IVehicle[];
  public currentPage:number = 1;

  constructor(public globals:Globals){
    this.currentPage = 1;

  }

  ngOnInit() {
    this.globals.apiGetVehicles(this.currentPage).subscribe(data => {
    this.vehicles = data;
   });
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

  public nextPage():void{
    this.currentPage++;
    this.globals.apiGetVehicles(this.currentPage).subscribe(data => {
    this.vehicles = data;
   });
  }
  public previousPage():void{
    this.currentPage--;
    this.globals.apiGetVehicles(this.currentPage).subscribe(data => {
    this.vehicles = data;
   });
  }
}

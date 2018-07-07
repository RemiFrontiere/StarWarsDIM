import { Component, OnInit } from '@angular/core';

import { environment as env } from '@env/environment';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import { Globals } from '../../class/globals';

import { ICustomer, IPlanet, IResident } from '../../class/Interfaces';

@Component({
  selector: 'planets-component',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;
  public planets:IPlanet[];
  public currentPage:number = 1;

  constructor(public globals:Globals){
    this.currentPage = 1;
    globals.apiGetPlanets(this.currentPage).subscribe(data => {
    this.planets = data;
    console.log(this.planets)
   });
  }

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }

  public nextPage():void{
    this.currentPage++;
    this.globals.apiGetPlanets(this.currentPage).subscribe(data => {
    this.planets = data;
   });
  }
  public previousPage():void{
    this.currentPage--;
    this.globals.apiGetPlanets(this.currentPage).subscribe(data => {
    this.planets = data;
   });
  }
}

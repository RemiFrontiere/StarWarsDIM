import { Component, OnInit } from '@angular/core';

import { environment as env } from '@env/environment';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import { Globals } from '../../class/globals';

import { ICustomer, IPlanet, IResident, IVehicle, ISpaceship } from '../../class/Interfaces';

@Component({
  selector: 'spaceships-component',
  templateUrl: './spaceships.component.html',
  styleUrls: ['./spaceships.component.scss']
})
export class SpaceshipsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;
  public spaceships:ISpaceship[];
  public currentPage:number = 1;

  constructor(public globals:Globals){
    this.currentPage = 1;

  }

  ngOnInit() {
    this.globals.apiGetSpaceships(this.currentPage).subscribe(data => {
    this.spaceships = data;
    console.log(this.spaceships)
   });
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

  public nextPage():void{
    this.currentPage++;
    this.globals.apiGetSpaceships(this.currentPage).subscribe(data => {
    this.spaceships = data;
   });
  }
  public previousPage():void{
    this.currentPage--;
    this.globals.apiGetSpaceships(this.currentPage).subscribe(data => {
    this.spaceships = data;
   });
  }
}

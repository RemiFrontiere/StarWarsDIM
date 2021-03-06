import { Component, OnInit } from '@angular/core';

import { environment as env } from '@env/environment';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import { Globals } from '../../class/globals';

import { ICustomer, IPlanet } from '../../class/Interfaces';

@Component({
  selector: 'peoples-component',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;
  public peoples:ICustomer[];
  public currentPage:number = 1;

  constructor(public globals:Globals){
    this.currentPage = 1;
    globals.apiGetPeoples(this.currentPage).subscribe(data => {
    this.peoples = data;
    console.log(this.peoples)
   });
  }

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }

  public nextPage():void{
    this.currentPage++;
    this.globals.apiGetPeoples(this.currentPage).subscribe(data => {
    this.peoples = data;
   });
  }
  public previousPage():void{
    this.currentPage--;
    this.globals.apiGetPeoples(this.currentPage).subscribe(data => {
    this.peoples = data;
   });
  }
}

import { Component, OnInit, Input } from '@angular/core';

import { environment as env } from '@env/environment';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import { Globals } from '../../class/globals';

import { ICustomer, IPlanet, IResident } from '../../class/Interfaces';

@Component({
  selector: 'planet-component',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;
  @Input('planet') planet: IPlanet;
  public residents:IResident[];
  public currentPage:number = 1;

  constructor(public globals:Globals){
    this.currentPage = 1;
    this.residents = [];
  }

  ngOnInit() {
    if(this.planet){
      for(let resident of this.planet.residents){
        this.globals.apiGetResident(resident).subscribe(data => {
          // console.log(data)
          if(data){
            this.residents.push(data);
          }
        });
      }
    }
    // console.log(this.residents)
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }
}

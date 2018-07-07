import { Component, OnInit, Input } from '@angular/core';

import { environment as env } from '@env/environment';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import { Globals } from '../../class/globals';

import { ICustomer, IPlanet, IResident, IVehicle, ISpaceship } from '../../class/Interfaces';

@Component({
  selector: 'spaceship-component',
  templateUrl: './spaceship.component.html',
  styleUrls: ['./spaceship.component.scss']
})
export class SpaceshipComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;
  @Input('spaceship') spaceship:ISpaceship;
  public pilots:IResident[];
  public currentPage:number = 1;

  constructor(public globals:Globals){
    this.currentPage = 1;
    this.pilots = []
  }

  ngOnInit() {
    if(this.spaceship && this.spaceship.pilots){
      for(let pilot of this.spaceship.pilots){
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

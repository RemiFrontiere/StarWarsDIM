import { Component, OnInit, Input } from '@angular/core';

import { environment as env } from '@env/environment';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import { Globals } from '../../class/globals';

import { ICustomer, IPlanet, IResident, ISpecie } from '../../class/Interfaces';

@Component({
  selector: 'people-component',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;
  @Input('people') people: IResident;
  public planet:IPlanet;
  public species:ISpecie[];
  public currentPage:number = 1;

  constructor(public globals:Globals){
    this.currentPage = 1;
    this.planet = null;
  }

  ngOnInit() {
    this.species = [];
    if(this.people){
      this.globals.apiGetPlanet(this.people.homeworld).subscribe(data => {
        // console.log(data)
        if(data){
          this.planet = data;
        }
      });

      for(let specie of this.people.species){
        this.globals.apiGetSpecie(specie).subscribe(data => {
          // console.log(data)
          if(data){
            this.species.push(data);
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

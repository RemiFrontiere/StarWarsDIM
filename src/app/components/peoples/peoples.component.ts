import { Component, OnInit } from '@angular/core';

import { environment as env } from '@env/environment';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import { Globals } from '../../class/globals';

@Component({
  selector: 'peoples-component',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;
  people:any[]

  constructor(public globals:Globals){
    globals.apiGetPeoples().subscribe(data => this.people = data);
    console.log(this.people);
  }

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}

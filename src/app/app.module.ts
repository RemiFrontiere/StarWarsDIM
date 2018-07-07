import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';
import { StaticModule } from './static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';

import { Routes, RouterModule } from '@angular/router';

import { PeoplesComponent } from './components/peoples/peoples.component';
import { PeopleComponent } from './components/people/people.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { PlanetComponent } from './components/planet/planet.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { SpaceshipsComponent } from './components/spaceships/spaceships.component';
import { SpaceshipComponent } from './components/spaceship/spaceship.component';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// Les variables GLOBALS
import { Globals } from './class/globals';

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    // core & shared
    CoreModule,
    SharedModule,

    // features
    StaticModule,
    SettingsModule,

    // app
    AppRoutingModule,

    RouterModule
  ],
  declarations: [AppComponent, SpaceshipsComponent, SpaceshipComponent, VehicleComponent, VehiclesComponent, PeoplesComponent, PlanetsComponent, PlanetComponent, PeopleComponent],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule {}

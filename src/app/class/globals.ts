import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";

import { map } from 'rxjs/operators';

// import { Http, Headers } from '@angular/http'
// import { Http, Response, RequestOptions, RequestMethod, Headers } from '@angular/http';
// import { RequestOptions } from '@angular/http';
import { ICustomer, IPlanet, IResident, ISpecie, IVehicle, ISpaceship } from './Interfaces';

@Injectable()
export class Globals {

  private _isLogged:boolean = true;

  public jsonSav = null;
  people: any[];
  public planets:IPlanet[];
  public residents:IResident[];

  public headers = new Headers(
        {
          'Access-Control-Allow-Origin':'*',
          'Content-Type':'application/json',
          'Access-Control-Allow-Headers':'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          'Access-Control-Allow-Credentials':'true',
          'Access-Control-Allow-Methods':'OPTIONS,GET,PUT,POST,DELETE'
        }
    );
  // private _etablissementLogo:file = "";
  constructor(private http:HttpClient){
  }

  public apiGetPeoples(numPage:number) : Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>('https://swapi.co/api/people/?page='+numPage)
             .pipe(map(data => {
               // console.log(data);
                return data['results'];
             }));
  }
  public apiGetPlanets(numPage:number) : Observable<IPlanet[]> {
    return this.http.get<IPlanet[]>('https://swapi.co/api/planets/?page='+numPage)
             .pipe(map(data => {
               // console.log(data);
                return data['results'];
             }));
  }
  public apiGetVehicles(numPage:number) : Observable<IVehicle[]> {
    return this.http.get<IVehicle[]>('https://swapi.co/api/vehicles/?page='+numPage)
             .pipe(map(data => {
                console.log(data);
                return data['results'];
             }));
  }
  public apiGetSpaceships(numPage:number) : Observable<ISpaceship[]> {
    return this.http.get<ISpaceship[]>('https://swapi.co/api/starships/?page='+numPage)
             .pipe(map(data => {
                console.log(data);
                return data['results'];
             }));
  }
  public apiGetResident(request:string) : Observable<IResident> {
    return this.http.get<IResident>(request)
             .pipe(map(data => {
               // console.log(data);
                return data;
             }));
  }
  public apiGetPlanet(request:string) : Observable<IPlanet> {
    return this.http.get<IPlanet>(request)
             .pipe(map(data => {
               // console.log(data);
                return data;
             }));
  }
  public apiGetSpecie(request:string) : Observable<ISpecie> {
    return this.http.get<ISpecie>(request)
             .pipe(map(data => {
               // console.log(data);
                return data;
             }));
  }

}

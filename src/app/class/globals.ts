import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";

import { map } from 'rxjs/operators';

// import { Http, Headers } from '@angular/http'
// import { Http, Response, RequestOptions, RequestMethod, Headers } from '@angular/http';
// import { RequestOptions } from '@angular/http';
import { ICustomer } from './ICustomer';

@Injectable()
export class Globals {

  private _isLogged:boolean = true;

  public jsonSav = null;
  people: any[];

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
     console.log(this.apiGetPeoples());
     this.apiGetPeoples().subscribe(data => this.people = data);
     console.log(this.people);
  }

  public apiGetPeoples() : Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>('https://swapi.co/api/people/')
             .pipe(map(data => {
               console.log(data);
                return data['results'];
             }));
}

  // public apiGetPeoples()
  // {
  //   let json;
  //   let requestOptions = new RequestOptions();
  //   requestOptions.method = RequestMethod.Get
  //   requestOptions.headers = this.headers;
  //
  //   getCustomers() : Observable<ICustomer[]> {
  // return this.http.get<ICustomer[]>(this.url)
  //            .map(data => {
  //               return data['results'];
  //            });
  //
  //
  //   // this.http.get('assets/json/all.json').subscribe(res => {
  //   this.http.get('https://swapi.co/api/people',requestOptions).subscribe(res => {
  //     console.log("HTTPResult:",res);
  //     json = res.json();
  //   });
  // }

  //
  // public apiPostBalise(balise:Balise)
  // {
  //   let requestOptions = new RequestOptions();
  //   requestOptions.method = RequestMethod.Post
  //   requestOptions.headers = this.headers;
  //
  //   console.log("SAVEDJSON:", JSON.stringify(balise,this.getCircularReplacer()))
  //
  //   this.http.post('http://alexisboulet.craym.eu/aras-tech-api/web/api/beacons',
  //   JSON.stringify(balise, this.getCircularReplacer())
  //   ,requestOptions).subscribe(res => {
  //     console.log("HTTPResult:",res);
  //     this.apiGetBalise()
  //   });
  // }
  //
  // public apiDeleteBalise(balise:Balise)
  // {
  //   let requestOptions = new RequestOptions();
  //   requestOptions.method = RequestMethod.Delete
  //   requestOptions.headers = this.headers;
  //
  //   this.http.delete('http://alexisboulet.craym.eu/aras-tech-api/web/api/beacons/'+balise.Id
  //   ,requestOptions).subscribe(res => {
  //     console.log("HTTPResult:",res);
  //     this.apiGetBalise()
  //   });
  // }
  //
  // public apiGetGroupes()
  // {
  //   let json;
  //   let requestOptions = new RequestOptions();
  //   requestOptions.method = RequestMethod.Get
  //   requestOptions.headers = this.headers;
  //
  //   this.Groupes = new Array<Groupe>();
  //
  //   // GROUPES
  //   this.http.get('http://alexisboulet.craym.eu/aras-tech-api/web/api/groups',requestOptions).subscribe(res => {
  //     console.log("HTTPResult:",res);
  //     json = res.json();
  //     this.jsonSav = json;
  //     for (let i of json) {
  //       this.Groupes.push(new Groupe(i["id"], i["label"]))
  //     }
  //   });
  // }
  //
  // public apiPutBalise(balise:Balise):void
  // {
  //   let requestOptions = new RequestOptions();
  //   requestOptions.method = RequestMethod.Put
  //   requestOptions.headers = this.headers;
  //
  //   this.http.put('http://alexisboulet.craym.eu/aras-tech-api/web/api/beacons/'+balise.Id,
  //   JSON.stringify(balise, this.getCircularReplacer()),
  //   requestOptions).subscribe(res => {
  //     console.log("HTTPResult:",res);
  //   });
  // }
  //
  // public apiPostGroupe(group:Groupe):void
  // {
  //   let requestOptions = new RequestOptions();
  //   requestOptions.method = RequestMethod.Post
  //   requestOptions.headers = this.headers;
  //
  //   console.log("SAVEDJSON:", JSON.stringify(group,this.getCircularReplacer()))
  //
  //   this.http.put('http://alexisboulet.craym.eu/aras-tech-api/web/api/groups',
  //   JSON.stringify(group, this.getCircularReplacer()),
  //   requestOptions).subscribe(res => {
  //     console.log("HTTPResult:",res);
  //     this.apiGetGroupes();
  //   });
  // }
  //
  // public apiPutGroupe(group:Groupe):void
  // {
  //   let requestOptions = new RequestOptions();
  //   requestOptions.method = RequestMethod.Put
  //   requestOptions.headers = this.headers;
  //
  //   this.http.put('http://alexisboulet.craym.eu/aras-tech-api/web/api/groups/'+group.Id,
  //   JSON.stringify(group, this.getCircularReplacer()),
  //   requestOptions).subscribe(res => {
  //     console.log("HTTPResult:",res);
  //   });
  // }
  //
  // public getCircularReplacer = () => {
  //   const seen = new WeakSet;
  //   return (key, value) => {
  //     if (typeof value === "object" && value !== null) {
  //       if (seen.has(value)) {
  //         return;
  //       }
  //       seen.add(value);
  //     }
  //     return value;
  //   };
  // };
  //
  // get Balises():Array<Balise>{
  //   return this._balises;
  // }
  // set Balises(value: Array<Balise>){
  //   this._balises = value
  // }
  //
  // get Groupes():Array<Groupe>{
  //   return this._groupes;
  // }
  //
  // set Groupes(value: Array<Groupe>){
  //   this._groupes = value
  // }
  //
  // get Medias():Array<Media>{
  //   return this._medias;
  // }
  // set Medias(value: Array<Media>){
  //   this._medias = value
  // }
}

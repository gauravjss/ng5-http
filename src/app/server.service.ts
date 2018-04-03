import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ServerService {
  constructor( private http: Http) {}

  storeServers(servers: any) {
    const requestHeader = new Headers(
      {
        'Content-Type': 'application/json'
      }
    )
   /* return this.http.post(
      'https://gaurav-ng5.firebaseio.com/data.json',
      servers,
      {headers: requestHeader});*/

    return this.http.put(
      'https://gaurav-ng5.firebaseio.com/data.json',
      servers,
      {headers: requestHeader});
  }

  getServers() {
    return this.http.get('https://gaurav-ng5.firebaseio.com/data.json')
      .map(
        (response: Response) =>{
          const data = response.json();
          for (const server of data){
           // server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      )
      .catch(
        (error: Response) => {
          /*return Observable.throw(error);*/
          return Observable.throw('Some Custom Error Message');
        }
      )
  }
  getAppName() {
    return this.http.get('https://gaurav-ng5.firebaseio.com/data/appName.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}

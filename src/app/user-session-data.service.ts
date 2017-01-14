import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()
export class UserSessionDataService {

  private serviceUrl: string = 'http://localhost:8080/reporter/resources/report/user';  // URL to web API

  constructor(private http: Http) {
  }

  getBrowserInfo(username): Observable<any[]> {
    return this.http
      .get('http://localhost:8080/reporter/resources/report/user/' + username + '/browser', {headers: this.getHeaders()})
      .map((response: Response) => response.json());
  }

  getLocationInfo(username): Observable<any[]> {
    return this.http
      .get('http://localhost:8080/reporter/resources/report/user/' + username + '/location', {headers: this.getHeaders()})
      .map((response: Response) => response.json());
  }

  getUsers(): Observable<any[]> {
    return this.http
      .get(this.serviceUrl, {headers: this.getHeaders()})
      .map((response: Response) => response.json());
  }

  getAlerts(): Observable<any[]> {
    return this.http
      .get('http://localhost:8080/reporter/resources/report/alert', {headers: this.getHeaders()})
      .map((response: Response) => response.json());
  }

  getKeystrokes(username): Observable<any[]> {
    return this.http
      .get('http://localhost:8080/reporter/resources/report/user/'+ username + '/keystrokes', {headers: this.getHeaders()})
      .map((response: Response) => response.json())
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }


}


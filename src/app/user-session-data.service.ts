import {Injectable} from "@angular/core";
import {UserSession} from "./user-session";
import {Observable} from "rxjs";
import {Http, Response, Headers} from "@angular/http";


@Injectable()
export class UserSessionDataService {

  private serviceUrl:string = 'http://localhost:8080/reporter/resources/report/login';  // URL to web API
  constructor(private http: Http) {
  }

  getAllUserSessionData(): Observable<UserSession[]> {
    return this.http
      .get(this.serviceUrl, {headers: this.getHeaders()})
      .map(mapUserSessionData);
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
function mapUserSessionData(response: Response): UserSession[] {
  return response.json().map(toSessionData);
}

function toSessionData(r: any): UserSession {
  let userSession = <UserSession>({
    sessionId: r.sessionId,
    operatingSystem: r.operatingSystem,
    language: r.language,
    browser: r.browser,
    location: r.location,
    referrer: r.referrer
  });
  console.log('Parsed userSession', userSession);
  return userSession;

}


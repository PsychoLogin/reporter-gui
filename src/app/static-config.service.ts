import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {StaticConfig} from "./static-config";
import "rxjs/add/operator/map";


@Injectable()
export class StaticConfigService {


  private serviceUrl:string = 'http://localhost:8080/reporter/resources/config/static';  // URL to web API
  constructor(private http: Http) {
  }

  getStaticConfig(): Observable<StaticConfig> {
    return this.http
      .get(this.serviceUrl, {headers: this.getHeaders()})
      .map((response: Response) => response.json())
      .map(({penaltyErrorLevel, penaltyWarningLevel, minimumNumberLogins}) => <StaticConfig>({
        penaltyErrorLevel: penaltyErrorLevel,
        penaltyWarningLevel: penaltyWarningLevel,
        minimumNumberLogins: minimumNumberLogins
      }))
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  updateConfig(config) {
    let body = JSON.stringify(config);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(body);
    console.log(headers);
    return this.http
      .put(this.serviceUrl, body, options)
      .map((res: Response) => res.json());
  }
}

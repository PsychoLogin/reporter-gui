import {Component} from "@angular/core";
import {UserSessionDataService} from "./user-session-data.service";
import {StaticConfigService} from "./static-config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserSessionDataService, StaticConfigService]
})
export class AppComponent {
  constructor(){}


}

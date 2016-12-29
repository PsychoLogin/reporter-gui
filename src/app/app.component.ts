import {Component} from "@angular/core";
import {UserSessionDataService} from "./user-session-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserSessionDataService]
})
export class AppComponent {
  constructor(){}


}

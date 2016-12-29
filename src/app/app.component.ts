import {Component, OnInit} from '@angular/core';
import {UserSessionDataService} from "./user-session-data.service";
import {UserSession} from "./user-session";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserSessionDataService]
})
export class AppComponent implements OnInit {
  constructor(private userSessionDataService: UserSessionDataService){}

  datas: UserSession[] = [];

  ngOnInit() {
    this.userSessionDataService
      .getAllUserSessionData()
      .subscribe(d => this.datas = d)
  }
}

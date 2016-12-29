import { Component, OnInit } from '@angular/core';
import {UserSession} from "../user-session";
import {UserSessionDataService} from "../user-session-data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userSessionDataService: UserSessionDataService){}

  datas: UserSession[] = [];

  ngOnInit() {
    this.userSessionDataService
      .getAllUserSessionData()
      .subscribe(d => this.datas = d)
  }

}

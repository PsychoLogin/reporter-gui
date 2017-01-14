import {Component, OnInit} from "@angular/core";
import {UserSessionDataService} from "../user-session-data.service";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  constructor(private userSessionDataService: UserSessionDataService) {
  }

  alerts: any = [];

  ngOnInit() {
    this.userSessionDataService
      .getAlerts()
      .subscribe(d => this.alerts = d)
  }

}

import {Component, OnInit} from "@angular/core";
import {UserSessionDataService} from "../user-session-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userSessionDataService: UserSessionDataService, private route: ActivatedRoute) {
  }

  username: string;

  browserData: any = [];
  locationData: any = [];

  view: any[] = [600, 200];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username =  params['user'];
    });

     this.userSessionDataService
      .getBrowserInfo(this.username)
      .subscribe(d => this.browserData = d);

    this.userSessionDataService
      .getLocationInfo(this.username)
      .subscribe(d => this.locationData = d);
  }

}

import {Component, OnInit} from "@angular/core";
import {UserSessionDataService} from "../user-session-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userSessionDataService: UserSessionDataService, private router: Router) {
  }


  users: any = [];

  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };


  ngOnInit() {

    this.userSessionDataService
      .getUsers()
      .subscribe(d => this.users = d);

  }

  onSelect(event) {
    this.router.navigate(['/logins/'+ event.name]);
  }




}

import { Component, OnInit } from '@angular/core';
import {StaticConfigService} from "../static-config.service";
import {StaticConfig} from "../static-config";

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor(private userSessionDataService: StaticConfigService){}

  staticConfig: StaticConfig = new StaticConfig;

  ngOnInit() {
    this.userSessionDataService
      .getStaticConfig()
      .subscribe(d => this.staticConfig = d)
  }

}

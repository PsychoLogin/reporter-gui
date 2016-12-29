import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AlertsComponent } from './alerts/alerts.component';

const appRoutes: Routes = [
  {path: 'logins', component: LoginComponent },
  {path: 'configuration', component: ConfigurationComponent},
  {path: 'alerts', component: AlertsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfigurationComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

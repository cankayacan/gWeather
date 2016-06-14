import {Component} from "@angular/core";
import {RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {WeatherPage} from "./pages/weather/weather.component";
import {HTTP_PROVIDERS} from "@angular/http";

@Component({
  selector: "main",
  directives: [NS_ROUTER_DIRECTIVES],
  providers: [NS_ROUTER_PROVIDERS, HTTP_PROVIDERS],
  template: "<page-router-outlet></page-router-outlet>"
})
@RouteConfig([
  { path: "/Weather", component: WeatherPage, name: "Weather", useAsDefault: true },
])
export class AppComponent {}
import {Component, OnInit} from "@angular/core";
import {Weather, WeatherStatus} from "../../shared/weather";
import {WeatherService} from "../../shared/weather.service";
import {Router} from "@angular/router-deprecated";
import {Page} from "ui/page";
import {Forecast} from "../../shared/forecast";

@Component({
    selector: "weather",
    templateUrl: "pages/weather/weather.html",
    styleUrls: ["pages/weather/weather-common.css", "pages/weather/weather.css"],
    providers: [WeatherService]
})
export class WeatherPage implements OnInit {
    city:string;
    weather:Weather;
    forecast:Forecast;
    WeatherStatus = WeatherStatus;

    constructor(private weatherService:WeatherService, private page: Page) {
        this.city = 'Berlin';
        this.refresh();
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    refresh() {
        this.getWeather();
        this.getForecast();
    }

    private getWeather():void {
        this.weatherService.getWeather(this.city)
            .subscribe((weather:Weather) => this.weather = weather);
    }

    private getForecast():void {
        this.weatherService.getForecast(this.city)
            .subscribe((forecast:Forecast) => this.forecast = forecast);
    }
}
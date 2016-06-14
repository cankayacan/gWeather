import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Weather} from "./weather";
import {Config} from "./config";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {Forecast} from "./forecast";

@Injectable()
export class WeatherService {
    constructor(private http: Http) {}

    getWeather(city:string) {
        let apiUrl = Config.weatherUrl.replace('{city}', city);

        return this.http.get(apiUrl)
            .map((res:Response) => {
                let weatherJson = res.json();
                return new Weather(weatherJson, null);
            });
    }
    
    getForecast(city:string) {
        let apiUrl = Config.forecastUrl.replace('{city}', city);

        return this.http.get(apiUrl)
            .map((res:Response) => {
                let forecastJson = res.json();
                return new Forecast(forecastJson);
            });
    }
}
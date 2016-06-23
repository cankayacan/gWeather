import {Weather} from "./weather";

export class Forecast {
    weathers:Array<Weather> = [];

    constructor(forecastJson) {
        for (var i = 0; i < 5; i++) {
            let weatherJson = forecastJson.list[i];
            this.weathers.push(new Weather(weatherJson, weatherJson.temp.day));
        }
    }
}
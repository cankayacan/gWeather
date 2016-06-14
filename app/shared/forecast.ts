import {Weather} from "./weather";

export class Forecast {
    weathers:Array<Weather> = [];

    constructor(forecastJson) {
        for (let weatherJson of forecastJson.list) {
            this.weathers.push(new Weather(weatherJson, weatherJson.temp.day));
        }
    }
}
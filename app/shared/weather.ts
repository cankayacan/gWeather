const COLD_UPPER = 14;
const HOT_LOWEST = 25;

export class Weather {
  temperature:Number;
  icon:String;
  status:WeatherStatus;
  statusText:string;

  constructor(weatherJson, temp) {
    this.temperature = temp ? temp : weatherJson.main.temp;
    this.icon = weatherJson.weather[0].icon;
    this.statusText = weatherJson.weather[0].main;
    this.status = WeatherStatus.Hot;
    if(this.temperature < COLD_UPPER) {
      this.status = WeatherStatus.Cold;
    }
    if(this.temperature >= COLD_UPPER && this.temperature < HOT_LOWEST) {
      this.status = WeatherStatus.Warm;
    }
  }
}

export enum WeatherStatus {
  Hot,
  Warm,
  Cold
}

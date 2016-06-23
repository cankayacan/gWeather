const COLD_UPPER = 14;
const HOT_LOWEST = 25;

export class Weather {
  temperature:Number;
  icon:String;
  status:WeatherStatus;
  statusText:string;
  day:string;

  constructor(weatherJson, temp) {
    this.temperature = temp ? temp : weatherJson.main.temp;
    this.icon = weatherJson.weather[0].icon;
    this.statusText = weatherJson.weather[0].main;
    this.status = this.getStatus();
    this.day = this.getShortDayText(weatherJson.dt);
  }

  private getStatus():WeatherStatus {
    let status = WeatherStatus.Hot;
    if(this.temperature < COLD_UPPER) {
      status = WeatherStatus.Cold;
    }
    if(this.temperature >= COLD_UPPER && this.temperature < HOT_LOWEST) {
      status = WeatherStatus.Warm;
    }
    return status;
  }

  private getShortDayText(utcEpoch):string {
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let date = new Date(0);
    date.setUTCSeconds(utcEpoch);
    return days[date.getDay()].substr(0, 3);
  }
}

export enum WeatherStatus {
  Hot,
  Warm,
  Cold
}

import './style/style.css';
import weatherApiService from './apiService/weatherApiService.js';

console.log(weatherApiService.getWeatherData('10.909433', '78.3665347').then((res) => console.log(res)));

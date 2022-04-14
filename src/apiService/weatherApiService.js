const GEO_CODE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const WEATHER_DATA_URL = 'https://api.openweathermap.org/data/2.5/onecall?';
const API_KEY = '3bea71f7f942028431554879c47b3585';
const EXCLUDE = 'minutely';

async function getGeoCodeData(country) {
  const geoCodeJson = await fetch(
    `${GEO_CODE_URL}q=${country}&appid=${API_KEY}`,
  ).then((res) => res.json());
  const { coord } = geoCodeJson;
  return coord;
}

async function getWeatherData(lat, lon) {
  const weatherData = await fetch(
    `${WEATHER_DATA_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}&exclude=${EXCLUDE}`,
  ).then((res) => res.json());
  const { current, hourly, daily } = weatherData;
  return { current, hourly, daily };
}

async function encryptAndSendMessage() {
  // const publicKey  = fetch('http://localhost:3000/getPublicKey').then(res => res.json());
  const headers = new Headers();
  headers.append('Origin', 'http://localhost:3000');
  const publicKey = await fetch('http://localhost:3000/getPublicKey', {
    mode: 'no-cors',
    credentials: 'include',
    method: 'GET',
  }).then((res) => res.json());
  console.log(publicKey);
}

encryptAndSendMessage();
export default { getGeoCodeData, getWeatherData };

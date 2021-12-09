import axios from 'axios';
import { printError, printWeather } from './logService.js';
import { getKeyValue, TOKEN_DICTIONARY } from './storageService.js'



export const getWeather = async () => {
  const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);
  const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);

  if (!token || !city) {
    throw new Error('Empty token. Set token by enter: -t [YOUR_TOKEN]')
  }
  if (!city) {
    throw new Error('Empty city. Set token by enter: -c [CITY]')
  }

  const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      'q': city,
      'appid': token,
      lang: 'ru',
      units: 'metric'
    }
  });

  return response.data
}


export const getForecast = async () => {
  try {
    const weather = await getWeather();
    printWeather(weather);
  } catch (err) {
    switch (err?.response?.status) {
      case 404: printError('Invalid city'); break;
      case 401: printError('Invalid token'); break;
      default: printError(err.message)
    }
  }
}
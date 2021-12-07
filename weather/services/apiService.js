import axios from 'axios';
import { printError } from './logService.js';
import { getKeyValue, TOKEN_DICTIONARY } from './storageService.js'



export const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);

  if (!token) {
    throw new Error('Empty token. Set token by enter: -t [YOUR_TOKEN]')
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

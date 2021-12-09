import chalk from 'chalk';
import dedent from 'dedent-js';

const { bgRed, bgGreen, bgYellow, bgCyan, bgBlue } = chalk;

export const printError = (msg) => {
  console.log(`${bgRed('ERROR')} ${msg}`)
}

export const printSuccess = (msg) => {
  console.log(`${bgGreen('SUCCESS')} ${msg}`)
}

export const printWarning = (msg) => {
  console.log(`${bgYellow('WARN')} ${msg}`)
}

export const printHelp = () => {
  console.log(dedent`
    ${bgCyan('HELP')}
    Without params - weather output
    -s [CITY] to set city
    -h to get help
    -t [API KEY] to set api key
  `)
}

export const printWeather = (res) => {
  console.log(dedent`
    ${bgBlue(' WEATHER ')} 
    City:  ${res.name}
    ${getIcon(res.weather[0].icon)} ${res.weather[0]?.description}
    Temp: ${res.main.temp}
    Feels like: ${res.main.feels_like}
    Wet: ${res.main.humidity}
    Wind speed: ${res.wind.speed}
  `)
}

export const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case '01': return '☀️';
    case '02': return '🌤️';
    case '03': return '☁️';
    case '04': return '☁️';
    case '09': return '🌧️';
    case '10': return '🌦️';
    case '11': return '🌩️';
    case '13': return '❄️';
    case '50': return '🌫️';
  }
};
import chalk from 'chalk';
import dedent from 'dedent-js';

const { bgRed, bgGreen, bgYellow, bgCyan } = chalk;

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
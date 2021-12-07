#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp, printSuccess, printError } from './services/logService.js';
import { saveKeyValue, saveToken } from "./services/storageService.js";
import { getWeather } from './services/apiService.js';



const initCli = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }

  if (args.t) {
    return saveToken(args.t)
  }

  getWeather('moscow')
}


initCli()
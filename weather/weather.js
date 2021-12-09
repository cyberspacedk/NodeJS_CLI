#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp, printWeather } from './services/logService.js';
import { saveCIty, saveToken } from "./services/storageService.js";
import { getForecast } from './services/apiService.js';


const initCli = async () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }

  if (args.c) {
    await saveCIty(args.c);
  }

  if (args.t) {
    saveToken(args.t)
  }

  getForecast();
}


initCli()
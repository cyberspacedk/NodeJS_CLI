import os from 'os';
import fs from 'fs';
import path from 'path';

import { printSuccess, printError } from './logService.js';

const { homedir } = os;
const { writeFileSync, writeFile, promises } = fs;
const { join, basename, dirname, extname, relative, isAbsolute, resolve, sep } = path;

// homedir() - return user Home dir (any OS)
const FILE_PATH = join(homedir(), 'weather-data.json');

export const TOKEN_DICTIONARY = {
  token: 'token',
  city: 'city'
}

export const saveKeyValue = async (key, value) => {
  let data = {};

  if (await isExist(FILE_PATH)) {
    const file = await promises.readFile(FILE_PATH);
    const existingData = JSON.parse(file);
    data = existingData;
  }

  data[key] = value;
  await promises.writeFile(FILE_PATH, JSON.stringify(data));

}

export const saveToken = async (token) => {
  if (!token?.trim().length) {
    printError('Please provide token');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token)
    printSuccess('Token saved')
  } catch (err) {
    printError(err.message)
  }
}

export async function getKeyValue(key) {
  if (await isExist(FILE_PATH)) {
    const file = await promises.readFile(FILE_PATH);
    const existingData = JSON.parse(file);
    return existingData[key]
  }
  return;
}

async function isExist(path) {
  try {
    await promises.stat(path);
    return true
  } catch {
    return false
  }
}
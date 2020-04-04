const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');

const keyManager = new KeyManager();
const apiKey = keyManager.getKey();
// demo-26240835858194712a4f8cc0dc635c7a&ids
const cryptoAPI = new CryptoAPI(apiKey);


const check = {
  async price(cmd){
   const result = await cryptoAPI.getPriceData(cmd.coin, cmd.cur);
   console.log(result); 
  }
}

module.exports = check;
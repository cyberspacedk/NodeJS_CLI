const axios = require('axios');
const colors = require('colors');

class CryptoAPI {
  constructor(apiKey){
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
  }

  async getPriceData(coinOption, curOption){
    try {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: curOption
      }) 

      const res = await axios(
        `${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`
        );

      let output = '';
      res.data.forEach(coin => {
        output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${formatter.format(coin.price).green} | Rank: ${coin.rank.blue} \n`
      });
      
      if(output === ''){
        console.log('Incorrect coin ticker'.red);       
      }
      return output;
    } catch (error) {
      let errorMessage = '';

      switch(error.response.status){
        case 401:
          errorMessage = 'Your Api key is invalid. Go to https://nomics.com'; break;
        case 404: 
          errorMessage ='Something is not working';break;
        default:
          errorMessage ='Your Api is not responding';
      }
     
      return errorMessage.red;
    }
  }
};

module.exports = CryptoAPI;
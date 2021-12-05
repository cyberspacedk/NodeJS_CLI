const inquirer = require('inquirer');
const colors = require('colors');

const KeyManager = require('../lib/KeyManager');
const {isRequired} = require('../utils/validation');

const keyManager = new KeyManager();

const key = {
  async set(){
    const input = await inquirer.prompt([{
      type:'input',
      name:'key',
      message: 'Enter API Key '.green + 'https://nomics.com', 
      validate: isRequired
    }]);

    const key = keyManager.setKey(input.key);
    
    if(key){
      console.log('API Key Set'.blue)
    }
  },
  show(){
   try {
     const key = keyManager.getKey();
     console.log(`Current API Key: ${key.italic.yellow}`);
     return key;
   } catch (error) {
     console.error(error.message)
   }
  },
  remove(){
    try {
      keyManager.deleteKey();
      console.log('Key Removed'.blue);
      return;
    } catch (error) {
      console.error(error.message)
    }
  }
}

module.exports = key;
const colors = require('colors');

// Required fields

const isRequired = input => input === '' ? 'This value is required'.red : true;


module.exports = {
  isRequired
}
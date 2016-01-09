"use strict";

class Greet {
  constructor() {
    this.name = 'I\'am Groot!';
  }

  tell() {
    console.log('Greet: ' + this.name);
  }
}

module.exports = Greet;
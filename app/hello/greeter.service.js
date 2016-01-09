"use strict";

import angular from 'angular';

class Greeter {
  constructor() {
    this.name = 'Webpack';
    this.greeting = 'Hello';
  }

  greet() {
    return this.greeting + ' ' + this.name;
  }
}

export default angular.module('app.hello')
  .service('greeter', Greeter)
  .name;

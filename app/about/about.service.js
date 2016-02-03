"use strict";

import angular from 'angular';
import './about.less';

class AboutService {
  constructor() {
    this.name = 'Webpack';
  }

  tell() {
    return 'About ' + this.name;
  }
}

angular.module('app').register
  .service('aboutService', AboutService);

"use strict";

import angular from 'angular'
import './hello.less';

angular.module('app').controller('helloCtrl', () => {
  require(['./Greet.js'], (Greet) => {
    var greet = new Greet();
    greet.tell();
  });
});
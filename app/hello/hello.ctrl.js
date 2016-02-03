"use strict";

import angular from 'angular'

angular.module('app.hello').controller('helloCtrl', function() {
  require(['./Greet.js'], Greet => {
    var greet = new Greet();
    greet.tell();
  });
});
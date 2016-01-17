"use strict";

import angular from 'angular'
import greeter from './greeter.service'

angular.module('app.hello').controller('helloCtrl', function ($scope, greeter) {

  $scope.name = greeter.greet();

  require(['./Greet.js'], Greet => {
    var greet = new Greet();
    greet.tell();
  });

});
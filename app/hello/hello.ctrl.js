import greeter from './greeter.service'
//import Greet from './Greet'

require('angular').module('app.hello').controller('helloCtrl', function($scope, greeter) {
  "use strict";

  $scope.name = greeter.greet();

  //var Greet = require('./Greet.js');
  //var greet = new Greet();
  //greet.tell();


  require(['./Greet.js'], Greet => {
    var greet = new Greet();
    greet.tell();
  });

});
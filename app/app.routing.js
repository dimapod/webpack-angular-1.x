"use strict";

export default function routing($stateProvider, $controllerProvider) {
  $stateProvider
    .state('hello', {
      url: '/hello',
      template: require('./hello/hello.html'),
      controller: 'helloCtrl'
    })
    .state('about', {
      url: '/about',
      template: require('./about/about.html'),
      controller: 'aboutCtrl',
      resolve: {
        init: ($q) => {
          return $q(function(resolve) {
            require(['./about/about.ctrl'], function() {
              $controllerProvider.register('aboutCtrl', require('./about/about.ctrl'));
              resolve();
            });
          });
        }
      }
    });
}
"use strict";

export default function routing($stateProvider) {
  $stateProvider
    .state('hello', {
      url: '/hello',
      template: require('./hello/hello.html'),
      controller: 'helloCtrl'
    })
    .state('about', {
      url: '/about',
      template: require('./about/about.html'),
      controller: 'aboutCtrl'
    });
}
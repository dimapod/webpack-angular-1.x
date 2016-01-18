"use strict";

export default function routing($stateProvider) {
  $stateProvider
    .state('hello', {
      url: '/hello',
      template: require('./hello/hello.html'),
      controller: 'helloCtrl',
      resolve: {
        loadModule: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require(['./hello/hello.module'], (module) => {
              resolve($ocLazyLoad.load({name: module.default}));
            });
          });
        }
      }
    })
    .state('about', {
      url: '/about',
      template: require('./about/about.html'),
      controller: 'aboutCtrl',
      resolve: {
        loadModule: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require(['./about/about.module'], (module) => {
              resolve($ocLazyLoad.load({name: module.default}));
            });
          });
        }
      }
    });
}
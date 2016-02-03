import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.routing';

angular.module('app', [uirouter])
  .config(routing)
  .config(
    ($controllerProvider, $compileProvider, $filterProvider, $provide) => {
      angular.module('app').register = {
        controller: $controllerProvider.register,
        directive: $compileProvider.directive,
        filter: $filterProvider.register,
        factory: $provide.factory,
        service: $provide.service
      };
    }
  );

require('./hello/hello.ctrl');
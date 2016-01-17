import './about.less';
import angular from 'angular';

export default angular
  .module('app.about', [])
  .config(
    ($controllerProvider, $compileProvider, $filterProvider, $provide) => {
      angular.module('app.about').register = {
        controller: $controllerProvider.register,
        directive: $compileProvider.directive,
        filter: $filterProvider.register,
        factory: $provide.factory,
        service: $provide.service
      };
    }
  )
  .name;

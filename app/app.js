import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.routing';

import hello from './hello/hello.module';
import about from './about/about.module';

export default angular.module('app', [uirouter, hello, about])
  .config(routing);
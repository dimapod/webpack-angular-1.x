import angular from 'angular';
import uirouter from 'angular-ui-router';
import oclazyLoad from 'oclazyload';
import routing from './app.routing';

angular.module('app', [oclazyLoad, uirouter])
  .config(routing);
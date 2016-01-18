"use strict";

import angular from 'angular'
import aboutService from './about.service'

angular.module('app.about').controller('aboutCtrl', function ($scope, aboutService) {

  $scope.name = aboutService.tell();

});
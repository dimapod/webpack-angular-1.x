"use strict";

import aboutService from './about.service'

module.exports = function ($scope, aboutService) {
  $scope.name = aboutService.tell();
};

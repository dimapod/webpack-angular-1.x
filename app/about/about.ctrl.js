"use strict";

import aboutService from './about.service'

module.exports = ($scope, aboutService) => {
  $scope.name = aboutService.tell();
};

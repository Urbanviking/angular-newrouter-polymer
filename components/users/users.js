(function() {
  'use strict';

  angular.module('users', []).
    controller('UsersController', ['User', UsersController]);

  function UsersController(User) {
    this.users = User.query();
  };
})();

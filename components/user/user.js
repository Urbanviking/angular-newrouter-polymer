(function(){
  'use strict';

  angular.module('user', []).
    controller('UserController', ['$routeParams', 'User', UserController]);

  function UserController($routeParams, User) {
    this.user = User.get({id: $routeParams.id}, function(user) {
    });
  };
})();

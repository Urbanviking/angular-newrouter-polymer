'use strict';

angular.module('fitbird', [
  'ngAria',
  'ngAnimate',
  'ngMaterial',
  'ngNewRouter',
  'user',
  'users',
  'services'
]).
  controller('AppController', ['$router', '$scope', AppController]);

function AppController ($router, $scope) {
  $router.config([
    { path: '/',          redirectTo: '/users' },
    { path: '/users',     component: 'users' },
    { path: '/users/:id', component: 'user' },
  ]);
  this.title = 'FitBird';
}

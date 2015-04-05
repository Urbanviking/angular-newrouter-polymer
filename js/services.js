'use strict';

angular.module('services', ['ngResource']).
    factory('User', ['$resource', User]);

function User($resource) {
  var users = [
    {
      id: 1,
      name: 'Abin'
    },
    {
      id: 2,
      name: 'Carlos'
    },
    {
      id: 3,
      name: 'Dan'
    },
    {
      id: 4,
      name: 'Casper'
    },
    {
      id: 5,
      name: 'Thor'
    },
    {
      id: 6,
      name: 'Ryan'
    }
  ];

  return {
    query: function() {
      return users;
    },
    get: function(id) {
      // Insert for loop to retrive user with same id as passed
      return;
    },
    create: function(user) {
      users.push(user);
    },
    delete: function(user) {
      for (var i=0; i<users.length; i++) {
        if (users[i] === user) {
          users.splice(i, 1);
        }
      }
    }
  };

  // return $resource('http://localhost:3000/api/users/:id.json', { id:'@id' }, {
  //   'query': { method: 'GET', isArray: true }
  // });
}

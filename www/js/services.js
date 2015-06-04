angular.module('mindKit.services', [])

.factory('ThoughtLog', function($resource) {
  return $resource('http://localhost:3000/logs/:id', { id:'@id' });
})
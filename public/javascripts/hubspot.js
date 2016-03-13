var app = angular.module('scottsApps', ['ngResource']);

app.controller('HubSpotController', function($scope, Lists){
  $scope.hubSpotLists = {};
  $scope.getHubSpotLists = function(){
    Lists.callApi()
    .then(function(data){
      $scope.hubSpotLists = data;
    }, function(data) {
      alert('Oops. Something went wrong...');
    })
  }
});

app.factory('Lists', function($http, $q){
  var service = {};
  var api = '/api/hubSpotLists';
  service.callApi = function() {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: api
    })
    .success(function(data){
      deferred.resolve(data);
    })
    .error(function(data){
      deferred.reject('Oops. There was an error!');
    })
    return deferred.promise;
  }
  return service;
})
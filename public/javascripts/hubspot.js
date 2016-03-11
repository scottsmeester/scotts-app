var app = angular.module('scottsApps', ['ngRoute', 'ngResource']);

app.controller = ('HubSpotController', function($scope){
  $scope.hubSpotLists = Lists.items;
});

app.factory = ('Lists', function($http){
  var list = {};
  $http.get('/api/hubSpotLists')
    .success(function(data){
      console.log('data', data);
    })
})
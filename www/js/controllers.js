angular.module('mindKit.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('SignupCtrl', function($scope) {})

.controller('AboutCtrl', function($scope) {})

.controller('ProgressCtrl', function($scope) {})

.controller('NewLogCtrl', function($scope, ThoughtLog, $http, $state) {
  // get all thought logs
  $scope.thoughtLogs = ThoughtLog.query();

  // form data for creating new thought log with ng-model
  $scope.thoughtLog = {situation: "", emotion1: "", emotion2: "", emotion3: "", emotion4: "", emotion5: "", emotion1AmountA: "", emotion2AmountA: "", emotion3AmountA: "", emotion4AmountA: "", emotion5AmountA: "", thought: "", altThought: ""};
  $scope.createLog = function() {
    //console.log($scope.thoughtLog);
    

    console.log("I clicked createlog");
    $http.post('http://localhost:3000/logs', $scope.thoughtLog).
      success(function(data, status, headers, config) {
        console.log("show that shit");
        $state.go('showLog');
      }).
      error(function(data, status, config) {
        console.log("I got to error ", data);
      });
  }
  
})

.controller('ShowLogCtrl', function($scope, $http) {


  $http.get('http://localhost:3000/logs').
    success(function(data, status, headers, config) {
      console.log(data);
      $scope.thoughtLogs = data;
    }).
    error(function(data, status, config) {
      console.log(data);
    });
})

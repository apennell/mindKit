angular.module('mindKit.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('SignupCtrl', function($scope) {})

.controller('AboutCtrl', function($scope) {})

.controller('ProgressCtrl', function($scope) {})

.controller('NewLogCtrl', function($scope, $http) {
  $scope.log = {};

  $scope.createLog = function() {
    $http.post("http://localhost:3000/logs", $scope.thoughtLog)
      .success(function(data) {
        console.log(data);
      })
      .error(function(data) {
        console.log(data);
      })
  }
})

.controller('ShowLogCtrl', function($scope) {})



// .controller('ChatsCtrl', function($scope, Chats) {
//   // With the new view caching in Ionic, Controllers are only called
//   // when they are recreated or on app start, instead of every page change.
//   // To listen for when this page is active (for example, to refresh data),
//   // listen for the $ionicView.enter event:
//   //
//   //$scope.$on('$ionicView.enter', function(e) {
//   //});
  
//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   }
// })

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

// .controller('AccountCtrl', function($scope) {
//   $scope.settings = {
//     enableFriends: true
//   };
// });

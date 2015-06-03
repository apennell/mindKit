// Ionic mindKit App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

// starter code:
// angular.module('starter', ['ionic'])

// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//     // for form inputs)
//     if(window.cordova && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//     }
//     if(window.StatusBar) {
//       StatusBar.styleDefault();
//     }
//   });
// })

// var app = angular.module('mindKit', ['ionic', 'ionic.wizard'])

angular.module('mindKit', ['ionic', 'ionic.wizard', 'mindKit.controllers', 'mindKit.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // Each tab has its own nav history stack:

  .state('login', {
    url: '/dash',
    templateUrl: 'templates/login.html',
    controller: 'DashCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'SignupCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'templates/about.html',
    controller: 'AboutCtrl'
  })

  .state('progress', {
    url: '/progress',
    templateUrl: 'templates/progress.html',
    controller: 'ProgressCtrl'
  })

  .state('newLog', {
    url: '/new',
    templateUrl: 'templates/newLog.html',
    controller: 'NewLogCtrl'
  })

  .state('showLog', {
    url: '/show',
    templateUrl: 'templates/showLog.html',
    controller: 'ShowLogCtrl'
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/dash');

});

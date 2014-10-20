// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('kzone', {
      url: "/kzone",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('kzone.ktv', {
      url: "/ktv",
      views: {
        'menuContent' :{
          templateUrl: "templates/ktv.html"
        }
      }
    })

    .state('kzone.info', {
      url: "/info",
      views: {
        'menuContent' :{
          templateUrl: "templates/info.html"
        }
      }
    })
    .state('kzone.game', {
      url: "/game",
      views: {
        'menuContent' :{
          templateUrl: "templates/game.html"
          // controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('kzone.activity', {
      url: "/activity",
      views: {
        'menuContent' :{
          templateUrl: "templates/activity.html"
        }
      }
    })

    .state('kzone.city', {
      url: "/city",
      views: {
        'menuContent' :{
          templateUrl: "templates/city.html"
        }
      }
    })

    .state('kzone.personal', {
      url: "/personal",
      views: {
        'menuContent' :{
          templateUrl: "templates/personal.html"
        }
      }
    })

    .state('kzone.setting', {
      url: "/setting",
      views: {
        'menuContent' :{
          templateUrl: "templates/setting.html"
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/kzone/ktv');
});


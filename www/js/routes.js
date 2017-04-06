angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('hoparaProject', {
    url: '/hopara',
    templateUrl: 'templates/hoparaProject.html',
    controller: 'hoparaProjectCtrl'
  })

  .state('hamiltonPaSites', {
    url: '/hamiltonPaSites',
    templateUrl: 'templates/hamiltonPaSites.html',
    controller: 'hamiltonPaSitesCtrl'
  })

  .state('pa', {
    url: '/pa',
    templateUrl: 'templates/pa.html',
    controller: 'paCtrl'
  })

  .state('pa2', {
    url: '/pa2',
    templateUrl: 'templates/pa2.html',
    controller: 'pa2Ctrl'
  })

  .state('puketePa', {
    url: '/pukete',
    templateUrl: 'templates/puketePa.html',
    controller: 'puketePaCtrl'
  })

  .state('kirikiriroaPa', {
    url: '/kirikiriroa',
    templateUrl: 'templates/kirikiriroaPa.html',
    controller: 'kirikiriroaPaCtrl'
  })

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('description', {
    url: '/desc',
    templateUrl: 'templates/description.html',
    controller: 'descriptionCtrl'
  })

$urlRouterProvider.otherwise('/hopara')

  

});
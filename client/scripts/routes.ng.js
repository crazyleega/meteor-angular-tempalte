import mainUrl from '../templates/main.ng.html';

app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: mainUrl,
      controller: 'mainCtrl'
    })

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');
}])
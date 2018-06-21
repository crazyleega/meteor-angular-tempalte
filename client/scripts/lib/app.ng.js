// Libs
import angular from 'angular';
import 'angular-meteor';
import 'angular-meteor-auth';
import 'angular-ui-router';

// App
app = angular.module("demo", [
  'angular-meteor',
  'angular-meteor.auth',
  'ui.router',
]);


angular.element(document).ready(function(){
  angular.bootstrap(document, ["demo"]);
});

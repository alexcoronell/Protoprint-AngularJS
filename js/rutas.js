 var proto = angular.module('protoprint', ['ngRoute']);

 proto.config(['$routeProvider',
     function($routeProvider) {
         $routeProvider.
         when('/laempresa', {
             templateUrl: 'pages/laempresa.html',
         }).
         when('/servicios', {
             templateUrl: 'pages/servicios.html',
         }).
         when('/catalogo', {
             templateUrl: 'pages/catalogo.html',
         }).
         when('/contacto', {
             templateUrl: 'pages/contacto.html',
         }).
         otherwise({
             redirectTo: '/',
             templateUrl: 'pages/inicio.html',
         });
     }
 ]);
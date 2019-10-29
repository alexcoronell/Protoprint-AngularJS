 
var proto = angular.module('protoprint', ['ngRoute']);

proto.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/quienessomos', {
            templateUrl: 'pages/laempresa.html',
        }).
        when('/servicios', {
            templateUrl: 'pages/servicios.html',
        }).
        when('/catalogos', {
            templateUrl: 'pages/catalogo.html',
        }).
        when('/contactanos', {
            templateUrl: 'pages/contacto.html',
        }).
        otherwise({
            redirectTo: '/',
            templateUrl: 'pages/inicio.html',
        });
    }
]);
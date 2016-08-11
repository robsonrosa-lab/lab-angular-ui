/// <reference path="..\typings\globals\angular\index.d.ts" />
/// <reference path="..\typings\globals\angular-route\index.d.ts" />

export module SpaCore {
  'use strict';

  function routes($routeProvider: ng.route.IRouteProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/src/core.template.html',
        controller: 'CoreController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

  routes.$inject = ['$routeProvider'];

  angular
    .module('SpaCore', [])
    .config(routes);

}

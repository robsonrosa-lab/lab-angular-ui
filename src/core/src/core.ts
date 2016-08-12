import angular = require('angular');

export interface IAppConfig extends ng.IAngularBootstrapConfig {

   title: string;

}

angular.module('SpaCore', []);
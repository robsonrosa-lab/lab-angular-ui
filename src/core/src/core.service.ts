/// <reference path="..\typings\globals\angular\index.d.ts" />

module SpaCore {
  export class CoreService implements ICoreService {

    static $inject = ['$http'];
    constructor(private $http: ng.IHttpService) {
    }

    check(adress: string): ng.IPromise<ng.IHttpPromiseCallbackArg<{}>> {
      return this.$http.get(`https://haveibeenpwned.com/api/v2/breachedaccount/${adress}`);
    }
  }

  angular
    .module('SpaCore')
    .service('CoreService', CoreService);
}

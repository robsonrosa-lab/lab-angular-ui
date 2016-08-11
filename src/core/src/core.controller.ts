/// <reference path="..\typings\globals\angular\index.d.ts" />

module SpaCore {
  export class CoreController {
    static $inject = ['CoreService'];
    constructor(private coreService: ICoreService) {
    }

    private breachedAccounts : BreachedAccount[];

    submit(address: string) {
      this.coreService.check(address).then((result: ng.IHttpPromiseCallbackArg<{}>) => {
        this.breachedAccounts = result.data as BreachedAccount[];
      })
      .catch((reason: any) => {
        console.info(reason.Message || reason.message);
      });
    }
  }

  angular
    .module('SpaCore')
    .controller('CoreController', CoreController);
}

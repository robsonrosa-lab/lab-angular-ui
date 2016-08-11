/// <reference path="..\typings\globals\angular\index.d.ts" />

module SpaCore {
  export interface ICoreService {
    check(adress: string): ng.IPromise<ng.IHttpPromiseCallbackArg<{}>>;
  }
}

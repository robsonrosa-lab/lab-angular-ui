import { IAppConfig } from 'lab-angular-ui-core';

export interface IUiAppConfig extends IAppConfig {

   description: string;
   modalService: ng.ui.bootstrap.IModalService;

}

angular.module('SpaUi', []);
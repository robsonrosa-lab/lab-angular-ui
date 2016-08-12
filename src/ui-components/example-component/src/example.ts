import { IAppConfig } from '../node_modules/lab-angular-ui-ui/node_modules/lab-angular-ui-core';
import { IUiAppConfig } from 'lab-angular-ui-ui';

export class ExampleAppConfig implements IUiAppConfig {

   title: string;
   description: string;
   modalService: ng.ui.bootstrap.IModalService;

   setData(): ng.ui.bootstrap.IButtonConfig {
      return { };
   }

}

angular.module('SpaExample', []);
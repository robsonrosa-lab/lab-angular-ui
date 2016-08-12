import core = require('../node_modules/lab-angular-ui-ui/node_modules/lab-angular-ui-core');
import { IUiAppConfig } from 'lab-angular-ui-ui';

export class ExampleAppConfig implements IUiAppConfig {

   title: string;
   description: string;
   modalService: any;

   setData(): ng.ui.bootstrap.IModalSettings {
      return { };
   }

}

angular.module('SpaExample, []');
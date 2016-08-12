import { IUiAppConfig } from 'lab-angular-ui-ui';
import ng = angular;

export class ExampleAppConfig implements IUiAppConfig {

   title: string;
   description: string;
   modalService: any;

   setData(): ng.ui.bootstrap.IModalSettings {
      return { };
   }

}

angular.module('SpaSample, []');
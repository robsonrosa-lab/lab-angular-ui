import core = require('../node_modules/lab-angular-ui-ui/node_modules/lab-angular-ui-core');
import ui = require('lab-angular-ui-ui');
import ng = angular;

export class ExampleAppConfig implements ui.IUiAppConfig {

   title: string;
   description: string;
   modalService: any;

   setData(): ng.ui.bootstrap.IModalSettings {
      return { };
   }

}


class Coisa implements core.IAppConfig {
   
} 
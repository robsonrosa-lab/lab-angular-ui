import { IAppConfig } from 'lab-angular-ui-core';

export interface IUiAppConfig extends IAppConfig {

   description: string;
   modalService: ng.ui.bootstrap.IModalService;

}

export class ModalService {
   static $inject =  ['$modal'];

   constructor(private $modal: any) {

   }

   openModal() : void {
      this.$modal.open();
   }

}


angular.module('SpaUi', []);
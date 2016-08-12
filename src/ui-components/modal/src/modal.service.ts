export interface ISpaModalService extends ng.ui.bootstrap.IModalService {

   open(options: ISpaModalSettings): ISpaModalInstance; 

}

export interface ISpaModalSettings extends ng.ui.bootstrap.IModalSettings {
   
   spaSize?: SpaModalSize;

}

export interface ISpaModalInstance extends ng.ui.bootstrap.IModalServiceInstance {

}

export enum SpaModalSize {
   Small,
   Medium,
   Large,
   Full
}

export class SpaModalService {
   
}
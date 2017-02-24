import {OwnerDetailsController} from "./owner-details.controller";

export class OwnerDetailsComponent implements ng.IComponentOptions {
    public controller: any = OwnerDetailsController;
    public template: string = require('./owner-details.html').toString()
}
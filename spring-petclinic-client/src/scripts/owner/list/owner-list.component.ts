import {OwnerListController} from "./owner-list.controller";

export class OwnerListComponent implements ng.IComponentOptions {
    public controller: any = OwnerListController;
    public template: string = require('./owner-list.html').toString()
}
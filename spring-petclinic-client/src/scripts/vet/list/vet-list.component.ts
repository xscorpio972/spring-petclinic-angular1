import {VetListController} from "./vet-list.controller";

export class VetListComponent implements ng.IComponentOptions {
    public controller: any = VetListController;
    public template: string = require('./vet-list.html').toString()
}
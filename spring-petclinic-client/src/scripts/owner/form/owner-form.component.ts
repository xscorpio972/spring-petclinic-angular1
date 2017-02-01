import {OwnerFormController} from "./owner-form.controller";

export class OwnerFormComponent implements ng.IComponentOptions {
    public controller: any = OwnerFormController;
    public template: string = require('./owner-form.html').toString()
}
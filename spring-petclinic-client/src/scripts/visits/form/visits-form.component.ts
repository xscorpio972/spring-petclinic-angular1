import {VisitsFormController} from "./visits-form.controller";

export class VisitsFormComponent implements ng.IComponentOptions {
    public controller: any = VisitsFormController;
    public template: string = require('./visits-form.html').toString()
}
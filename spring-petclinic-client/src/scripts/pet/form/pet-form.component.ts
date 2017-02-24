import {PetFormController} from "./pet-form.controller";

export class PetFormComponent implements ng.IComponentOptions {
    public controller: any = PetFormController;
    public template: string = require('./pet-form.html').toString()
}
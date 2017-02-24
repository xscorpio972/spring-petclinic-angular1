import * as angular from "angular";
import "angular-ui-router";
import {PetFormComponent} from "./pet-form.component";
import {config as routesConfig} from "./pet-form.config";
import {PetFormService} from "./pet-form.service";

export const PetFormModule = angular.module("petForm", ["ui.router"])
    .component("petForm", new PetFormComponent())
    .service("petFormService", PetFormService)
    .config(routesConfig)
    .name;
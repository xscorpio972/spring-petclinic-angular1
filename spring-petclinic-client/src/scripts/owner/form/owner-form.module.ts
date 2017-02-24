import * as angular from "angular";
import "angular-ui-router";
import {OwnerFormComponent} from "./owner-form.component";
import {config as routesConfig} from "./owner-form.config";
import {OwnerFormService} from "./owner-form.service";

export const OwnerFormModule = angular.module("ownerForm", ["ui.router"])
    .component("ownerForm", new OwnerFormComponent())
    .service("ownerFormService", OwnerFormService)
    .config(routesConfig)
    .name;
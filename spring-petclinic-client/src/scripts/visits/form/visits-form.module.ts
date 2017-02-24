import * as angular from "angular";
import "angular-ui-router";
import {VisitsFormComponent} from "./visits-form.component";
import {config as routesConfig} from "./visits-form.config";
import {VisitsFormService} from "./visits-form.service";

export const VisitsFormModule = angular.module("visitsForm", ["ui.router"])
    .component("visitsForm", new VisitsFormComponent())
    .service("visitsFormService", VisitsFormService)
    .config(routesConfig)
    .name;
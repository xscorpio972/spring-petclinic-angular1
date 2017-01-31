import * as angular from "angular";
import "angular-ui-router";
import {OwnerDetailsComponent} from "./owner-details.component";
import {config as routesConfig} from "./owner-details.config";
import {OwnerDetailsService} from "./owner-details.service";

export const OwnerDetailsModule = angular.module("ownerDetails", ["ui.router"])
    .component("ownerDetails", new OwnerDetailsComponent())
    .service("ownerDetailsService", OwnerDetailsService)
    .config(routesConfig)
    .name;
import * as angular from "angular";
import "angular-ui-router";
import {OwnerListComponent} from "./owner-list.component";
import {config as routesConfig} from "./owner-list.config";
import {OwnerListService} from "./owner-list.service";

export const OwnerListModule = angular.module("ownerList", ["ui.router"])
    .component("ownerList", new OwnerListComponent())
    .service("ownerListService", OwnerListService)
    .config(routesConfig)
    .name;
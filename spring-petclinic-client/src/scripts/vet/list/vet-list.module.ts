import * as angular from "angular";
import "angular-ui-router";
import {VetListComponent} from "./vet-list.component";
import {config as routesConfig} from "./vet-list.config";
import {VetListService} from "./vet-list.service";

export const VetListModule = angular.module("vetList", ["ui.router"])
    .component("vetList", new VetListComponent())
    .service("vetListService", VetListService)
    .config(routesConfig)
    .name;
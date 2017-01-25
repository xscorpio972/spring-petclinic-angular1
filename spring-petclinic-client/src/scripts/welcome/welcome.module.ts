import * as angular from "angular";
import "angular-ui-router";
import {WelcomeComponent} from "./welcome.component";
import {config as routesConfig} from "./welcome.config";

export const WelcomeModule = angular.module("layoutWelcome", ["ui.router"])
    .component("layoutWelcome", new WelcomeComponent())
    .config(routesConfig)
    .name;

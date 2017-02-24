import * as angular from "angular";

import {NavComponent} from "./nav.component";

export const NavModule = angular.module("layoutNav", [])
    .component("layoutNav", new NavComponent())
    .name;

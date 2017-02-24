import * as angular from "angular";

import {FooterComponent} from "./footer.component";

export const FooterModule = angular.module("layoutFooter", [])
    .component("layoutFooter", new FooterComponent())
    .name;

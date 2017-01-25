import * as angular from "angular";
import "angular-ui-router";
import {CommonModule} from "./common/common.module";
import {WelcomeModule} from "./welcome/welcome.module";
import "bootstrap/css/bootstrap.min.css";
import "../less/petclinic.less";
/* App Module */
angular.module("petClinicApp", [
    "ui.router", CommonModule, WelcomeModule])
    .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", "$httpProvider", function(
    $stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    // safari turns to be lazy sending the Cache-Control header
    $httpProvider.defaults.headers.common["Cache-Control"] = "no-cache";

    $locationProvider.hashPrefix("!");

    $urlRouterProvider.otherwise("/welcome");
    $stateProvider
        .state("app", {
            abstract: true,
            url: "",
            template: "<ui-view></ui-view>"
        })
}]);


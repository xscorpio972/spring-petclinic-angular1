config.$inject = ["$stateProvider", "$urlRouterProvider"];
export function config($stateProvider: angular.ui.IStateProvider,
            $urlRouterProvider: angular.ui.IUrlRouterProvider): void {
    $stateProvider
        .state("welcome", {
            parent: "app",
            url: "/welcome",
            template: "<layout-welcome></layout-welcome>"
        });
}
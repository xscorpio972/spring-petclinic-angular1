config.$inject = ["$stateProvider", "$urlRouterProvider"];

export function config($stateProvider: angular.ui.IStateProvider,
            $urlRouterProvider: angular.ui.IUrlRouterProvider): void {
            $stateProvider
                .state('vets', {
                    parent: 'app',
                    url: '/vets',
                    template: '<vet-list></vet-list>'
                });
}
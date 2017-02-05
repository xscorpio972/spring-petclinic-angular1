config.$inject = ["$stateProvider", "$urlRouterProvider"];

export function config($stateProvider: angular.ui.IStateProvider,
            $urlRouterProvider: angular.ui.IUrlRouterProvider): void {
             $stateProvider
            .state('visits', {
                parent: 'app',
                url: '/owners/:ownerId/pets/:petId/visits',
                template: '<visits-form></visits-form>'
            });
}
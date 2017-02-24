config.$inject = ["$stateProvider", "$urlRouterProvider"];

export function config($stateProvider: angular.ui.IStateProvider,
            $urlRouterProvider: angular.ui.IUrlRouterProvider): void {
             $stateProvider
            .state('petNew', {
                parent: 'app',
                url: '/owners/:ownerId/new-pet',
                template: '<pet-form></pet-form>'
            })
            .state('petEdit', {
                parent: 'app',
                url: '/owners/:ownerId/pets/:petId',
                template: '<pet-form></pet-form>'
            });
}
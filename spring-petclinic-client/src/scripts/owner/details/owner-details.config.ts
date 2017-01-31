config.$inject = ["$stateProvider", "$urlRouterProvider"];

export function config($stateProvider: angular.ui.IStateProvider,
            $urlRouterProvider: angular.ui.IUrlRouterProvider): void {
           $stateProvider
            .state('ownerDetails', {
                parent: 'app',
                url: '/owners/details/:ownerId',
                template: '<owner-details></owner-details>'
            })
}